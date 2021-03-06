const Usuario = require("../models/usuario").usuario;
const roles = require("../models/usuario").rolesValidos;

const verificaAdmin = async (req, res, next) => {

    try {
        const usuario = await Usuario.findById(req.usuario);
        if(!usuario) return res.status(401).json({mensaje: "No se encuentra al usuario"});
        if(usuario.rol === roles.values[0]) {
            next();
        } else {
            return res.status(403).json({mensaje: "No tiene permiso para realizar esta accion"});
        }
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }


};

module.exports = verificaAdmin;