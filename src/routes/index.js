const express = require('express');
// Utilizamos desde express un modulo "Router" siendo unmetodo 
//que se encarga de devolvernos un ejemplo, lo gusrdamos en una variable
const router = express.Router();

//SE utiliza y guarda aqui el esquema
const Task = require('../models/task');

router.get('/', async (req, res) => {
	// Aqui traemos datos desde la base de datos
	const tasks = await Task.find().lean();
	//Aqui indicamos nuestra vista, no agregamos la extencion "ejs"
	//porque ya definimos en el archivo "ejs" que busque archivos ".ejs"
	//y tampoco la carpeta, todo ya esta hecho con anterioridad
	res.render('index', {
		tasks
	});
});

// Controladores para las operaciones

//Agregar
router.post('/add', async (req, res, next) => {
	const task = new Task(req.body);
	await task.save();
	res.redirect('/');
});

//Eliminar
router.get('/delete/:id', async(req, res, next) =>{
	let { id } = req.params;
	await Task.remove({_id: id});
	res.redirect('/#solicitudes');
});

//Actualizar
//Consulta que te redirige hacia la pagina exclusiva de "Edit"
//por medio del id te envia aotra formulario
router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.render('edit', {
  	task
  });
 });

//Actualizacion de los datos
router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  await Task.update({_id: id}, req.body);
  res.redirect('/#solicitudes');
});

//Exportamos un enrutador
module.exports = router;
