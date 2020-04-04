const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SolicitudTripulante = new Schema({
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  email: String,
  telefono: {
    movil: Number,
    fijo: Number,
    otro: Number 
  },
  puesto: String,
  rango: String,
  Solicitud: {
    fechaInicio: String,
    fechaFinal: String,
    estado: {type: String, default: "Pendiente"}
  }
});

// Para poder utilizarlo utilizamos un metodo de mongoose llamado "model", 
//lo que hace es guardar los datos dentro de una coleccion de mongodb
//para utilizarlo fuera de aqui, lo que hacemos es exportarlo
module.exports = mongoose.model('SolicitudTripulante', SolicitudTripulante);
