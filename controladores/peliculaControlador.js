const Pelicula = require('../modelos/peliculaModelo');

exports.obtenerTodasLasPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las películas' });
  }
};

exports.crearPelicula = async (req, res) => {
  const nuevaPelicula = new Pelicula(req.body);
  try {
    await nuevaPelicula.save();
    res.status(201).json(nuevaPelicula);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la película' });
  }
};
