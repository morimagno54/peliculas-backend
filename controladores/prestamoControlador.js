const Prestamo = require('../modelos/prestamoModelo');

exports.obtenerTodosLosPrestamos = async (req, res) => {
  try {
    const prestamos = await Prestamo.find().populate('idPelicula');
    res.json(prestamos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los préstamos' });
  }
};

exports.crearPrestamo = async (req, res) => {
  const nuevoPrestamo = new Prestamo(req.body);
  try {
    await nuevoPrestamo.save();
    res.status(201).json(nuevoPrestamo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el préstamo' });
  }
};

exports.actualizarPrestamo = async (req, res) => {
  const { id } = req.params;
  try {
    const prestamoActualizado = await Prestamo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(prestamoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el préstamo' });
  }
};

exports.eliminarPrestamo = async (req, res) => {
  const { id } = req.params;
  try {
    await Prestamo.findByIdAndDelete(id);
    res.json({ mensaje: 'Préstamo eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el préstamo' });
  }
};
