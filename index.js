require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const peliculaRutas = require('./rutas/peliculaRutas');
const prestamoRutas = require('./rutas/prestamoRutas');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log('Servidor alojado en localhost:3000')
});

app.use('/api/peliculas', peliculaRutas);
app.use('/api/prestamos', prestamoRutas);


