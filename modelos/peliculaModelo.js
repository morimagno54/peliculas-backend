// En modelos/peliculaModelo.js
const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  titulo: String,
  genero: String,
  director: String,
  actores: [String],
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;


