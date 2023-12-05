const express = require('express');
const router = express.Router();
const prestamoControlador = require('../controladores/prestamoControlador');

router.get('/', prestamoControlador.obtenerTodosLosPrestamos);
router.post('/', prestamoControlador.crearPrestamo);
router.put('/:id', prestamoControlador.actualizarPrestamo);
router.delete('/:id', prestamoControlador.eliminarPrestamo);

module.exports = router;
