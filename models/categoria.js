const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    pelotas: {
        type: String,
        required: [true, 'Las pelotas no es obligatorio']
    },
    accesorios: {
        type: String,
        required: [true, 'Los accesorios no son obligatorio']
    },
    ropa: {
        type: String,
        required: [true, 'La ropa no es obligatorio']
    },
    seleccion: {
        type: String,
        required: [true, 'La seleccion no es obligatorio']
    },
    zapatos: {
        type: String,
        required: [true, 'Los zapatos no son obligatorio']
    },
    estado: {
        type:Boolean,
        default: true,
    }
});

module.exports = model('Categoria', CategoriaSchema)