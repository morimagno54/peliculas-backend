const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema({
  fechaPrestamo: { type: Date, default: Date.now },
  fechaDevolucion: Date,
  Pelicula: String,
  Socio: String,
});

const Prestamo = mongoose.model('Prestamo', prestamoSchema);

module.exports = Prestamo;
