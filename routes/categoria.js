//importaciones
const { Router } = require('express');
const { getCategorias, postCategoria, putCategoria, deleteCategoria } = require('../controllers/categoria');

const router = Router();

router.get('view', getCategorias);

router.get('/', getCategorias);

router.post('/agregar', postCategoria);

router.put('/edit/:id', putCategoria);

router.delete('/delete/:id', deleteCategoria);



module.exports = router;