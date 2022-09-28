const { response, query } = require('express');

const usuariosGet = (req, res = response) => {
    const { q, nombre= 'Pol Anka', apikey, page, limit } = req.query; // si no viene nombre, por defecto muestra Pol Anka
    res.json({
        msg: 'get api - controlador',
        q,
        nombre,
        apikey, 
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {
    //const id = req.params.id; para obteber una variable
    const { id } = req.params; // para desestructurar mas de una 
    res.json({
        msg: 'put api - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch api - controlador'
    });
}

const usuarioPost = (req, res = response) => {
    //const body = req.body;
    const {nombre, edad } = req.body;
    res.status(201).json({
        msg: 'post api - controller',
        nombre,
        edad
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        msg: 'delete api - controller'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuarioPost,
    usuarioDelete
    
}