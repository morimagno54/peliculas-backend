const express = require('express');
const router = express.Router();
const peliculaControlador = require('../controladores/peliculaControlador');

router.get('/', peliculaControlador.obtenerTodasLasPeliculas);
router.post('/', peliculaControlador.crearPelicula);

module.exports = router;
