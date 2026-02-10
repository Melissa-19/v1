const usuario = require ('../models/usuario.model');

const crearUsuario = async (data) =>{ 
    return await usuario.create(data);
};

const listarusuarios = async ()=>{
    return await usuario.findAll();
};
module.exports ={
    crearUsuario,
    listarusuarios
};