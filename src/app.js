// indicamos que modulos requerimos
const path = require('path');
const morgan = require('morgan');
const express = require('express');
var mongoose = require('mongoose');

const app = express();

// conexion con la base de datos
// desde el modulo moongose utilizamos el metodo connect que recibe como parametro la base de datos que vamos a utilizar
// no importa si no existe la base de datos en MongoDB, este gestor de NoSQL la creara automaticamente, solo la indicamos
mongoose.connect('mongodb+srv://gds0152:gds0152@cluster0-iagq8.mongodb.net/vacaciones?retryWrites=true&w=majority')
  .then(db => console.log('Ahora esta conectada la BD')) // mensajes para avisarnos si esta conectado
  .catch(err => console.log(err));; //o un error en la conexion


// importacion de rutas donde se encuentran en el archivo que indicamos
const indexRoutes = require('./routes/index');

// configuraciones
// nuestra aplicacion va a definir un puerto
// indica que tome un puerto del sistema operativo, de caso contrario se le asigna el puerto 3000
app.set('port', process.env.PORT || 3000);
// indica en donde esta la carpeta de las vistas (script para cuaquier sistema operativo)
app.set('views', path.join(__dirname, 'views'));
// indicamos el motor de plantilla que es el "ejs" que tan solo es un javascript que se convierte en html
app.set('view engine', 'ejs');

// middlewares (funcion que se utiliza antes de que lleguen a las rutas)
// aqui se procesan los datos antes de que lleguen
app.use(morgan('dev'));

// Cargar los archivos estaticos
//Aqui se encuentran los archivos css y los archivos js, onde los tomaremos para su estilo
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

// rutas (utilizamos estas rutas)
app.use('/', indexRoutes);

//Es quien se encarga de arrancar el servidor
// se obtiene el valor de la variable del puerto
app.listen(app.get('port'), () => {
	// El mensaje ahora indica el puerto que se este tomando con la variable anterior
    console.log(`server on port ${app.get('port')}`);
});
