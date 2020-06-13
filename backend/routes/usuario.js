const express = require("express");
const mongoose = require("mongoose");
const Usuario = require('../models/usuario').usuario;

const router = express.Router();

router.get('/', (req, res) => {
  Usuario.find().where('estado', true)
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ mensaje: error }))
});

router.get('/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({ mensaje: "Id invalido" });
  const usuario = await Usuario.findById(req.params.id)
  if (!usuario) return res.status(404).json({ mensaje: "No se encontro al usuario" });
  return res.status(200).json(usuario);
});

router.post('/', async (req, res) => {
  const usuario = new Usuario({
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password,
    rol: req.body.rol,
  });
  try {
    const nuevo = await usuario.save();
    return res.status(201).json({ usuario: nuevo });
  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }

});

router.put('/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({ mensaje: "Id invalido" });
  const usuario = await Usuario.findById(req.params.id);
  if (!usuario) return res.status(404).json({ mensaje: "No se encuentra al usuario" });
  usuario.set(req.body);
  try {
    await usuario.save();
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(400).json({ mensaje: error });
  }
});

router.patch('/:id/activar', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({ mensaje: "Id invalido" });
  const usuario = await Usuario.findById(req.params.id).where('estado', false);
  if (!usuario) return res.status(404).json({ mensaje: "No se encuentra al usuario" });
  usuario.set({ estado: true });
  try {
    await usuario.save();
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(400).json({ mensaje: error.message });
  }
});

router.patch('/:id/desactivar', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({ mensaje: "Id invalido" });
  const usuario = await Usuario.findById(req.params.id).where('estado', true);
  if (!usuario) return res.status(404).json({ mensaje: "No se encuentra al usuario" });
  usuario.set({ estado: false });
  try {
    await usuario.save();
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(400).json({ mensaje: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({ mensaje: "Id invalido" });
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) return res.status(404).json({ mensaje: "No se encuentra al usuario" });
    return res.status(200).json(usuario);
  } catch (error) {
    if (error.name == 'CastError') return res.status(400).json({ mensaje: "El id es invalido" });
    return res.status(400).json({ mensaje: error.message });
  }

});

module.exports = router;
