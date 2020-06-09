const path = require("path");
const fs = require("fs");

const express = require("express");
const Producto = require("../models/producto");
const paginador = require("../middlewares/paginador");
const fileupload = require("express-fileupload");

const router = express.Router();

router.use(fileupload());

router.get('/', paginador, async (req, res) => {
    try {
        const cantidad = await Producto.find({disponible: true}).count();
        const productos = await Producto
                                .find({disponible: true})
                                .skip(req.paginacion.p * req.paginacion.r)
                                .limit(req.paginacion.r);
        if(!productos) return res.status(404).json({mensaje: "No hay productos disponibles"});
        return res.status(200).json({cantidad: cantidad, productos: productos});
    } catch (error) {
        return res.status(400).json({mensaje: error.message});
    }
});

router.get('/buscar', async(req, res) => {
    try{
        const q = req.query.q;
        const regex = new RegExp(q, "i");
        const producto = await Producto.find({disponible: true, nombre: regex});
        if(!producto) return res.status(404).json({mensaje: "No se encuentra ningun producto"});
        return res.status(200).json(producto);
    }catch(error){
        return res.status(500).json({mensaje: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if(!producto) return res.status(404).json({mensaje: 'No existe el producto'});
        return res.status(200).json(producto);
    } catch (error) {
        return res.status(400).json({mensaje: error.message});
    }
});

router.post('/', async (req, res) => {
    try{
        let data = req.body;
        data.usuario = req.usuario;
        const producto = new Producto(data);
        await producto.save();
        return res.status(201).json(producto);
    }catch(error){
        return res.status(500).json({mensaje: error.message});
    }
});

router.get('/imagen/:nombre', (req, res) => {

    const pathImagen = path.resolve(__dirname, `../uploads/${ req.params.nombre }`);
    if(fs.existsSync(pathImagen)){
        return res.sendFile(pathImagen);
    }else{
        const noImagePath = path.resolve(__dirname, `../assets/noimage.jpg`);
        res.sendFile(noImagePath);
    }
});

router.put('/:id', async (req, res) => {
    try{
        const producto = await Producto.findById(req.params.id);
        if(!producto) return res.status(404).json({mensaje: "No se encuentra el producto"});
        producto.set(req.body);
        await producto.save();
        return res.status(200).json(producto);
    }catch(error){
        return res.status(500).json({mensaje: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if(!producto) return res.status(404).json({mensaje: "No se encuentra el producto"});
        return res.status(200).json({mensaje: "Producto borrado"});
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
});

router.put('/:id/imagen', async (req, res) => {
    if(!req.files) return res.status(400).json({mensaje: "No se selecciono ninguna imagen"});
    const imagen = req.files.imagen;
    if(!validarExtension(imagen.name)) return res.status(400).json({mensaje: "No se admite el tipo de archivo"});
    try{
        const producto = await Producto.findById(req.params.id);
        if(!producto) return res.status(404).json({mensaje: "No se encontro la categoria"});
        const [nombre, extension] = imagen.name.split(".");
        const nombreArchivo = `${req.params.id}-${ new Date().getTime() }.${ extension }`;
        await imagen.mv(`uploads/${nombreArchivo}`);
        producto.set({img: nombreArchivo});
        await producto.save();
        return res.status(200).json({mensaje: "Imagen subida correctamente", file: nombreArchivo});
    }catch(error){
        return res.status(500).json({mensaje: error.message});
    }
});

router.delete('/:id/imagen', async (req, res) => {
    try{
        const producto = await Producto.findById(req.params.id);
        if(!producto) return res.status(404).json({mensaje: "No se encuentra el producto"});
        const pathImagen = path.resolve(__dirname, `../uploads/${producto.img}`);
        if(fs.existsSync(pathImagen)){
            fs.unlinkSync(pathImagen);
            producto.set({img: null});
            await producto.save();
            return res.status(200).json({mensaje: "La imagen se borro correctamente"});
        }else{
            producto.set({img: null});
            producto.save();
            return res.status(404).json({mensaje: "El archivo ya no existe"});
        }
    }catch(error){
        return res.status(500).json({mensaje: error.message});
    }
});

const validarExtension = (file) => {
    const extensionesValidas = ['png', 'jpg', 'jpeg'];
    const [nombre, extension] = file.split('.');
    if(extensionesValidas.indexOf(extension) < 0) return false;
    return true;
}

module.exports = router;