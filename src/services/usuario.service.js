const usuario = require ('../models/usuario.model');

const crearUsuario = async (data) =>{ 
    return await usuario.create(data);
};

const listarUsuarios = async ()=>{
    return await usuario.findAll();
};
module.exports ={
    crearUsuario,
    listarUsuarios
};