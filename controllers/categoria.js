//Importacion
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

//Modelos
const Categoria = require('../models/categoria');


const getCategorias = async (req = request, res = response) => {

    //Condición, me busca solo los usuarios que tengan estado en true
    const query = { estado: true };

    const listaCategoria = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);

    res.json({
        msg: 'GET API de categoria',
        listaCategoria
    });
}


const postCategoria = async(req = request, res = response) => {

    const { pelotas, accesorios, ropa, seleccion, zapatos,}  = req.body;
    const categoriaDB = new Categoria({pelotas, accesorios, ropa, seleccion, zapatos});


    //Guardar en Base de datos
    await categoriaDB.save();

    res.json({
        msg: 'POST API de categoria',
        categoriaDB
    });

}

const putCategoria = async (req = request, res = response) => {
    const { id } = req.params;
    const { _id, estado, ...resto } = req.body;
    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto)
    res.json({
        msg: 'PUT API de categoria',
        categoriaEditada
    });

}



const deleteCategoria= async (req = request, res = response) => {

    const { id } = req.params;
    const categoriaEliminada = await Categoria.findByIdAndDelete(id)
    res.json({
        msg: 'DELETE API de Categoria',
        categoriaEliminada
    });

}



module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}