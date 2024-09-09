const express = require('express');
const router = express.Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
  res.render('index'); 
});


router.get('/sobre_nosotros', (req, res) => {
  res.render('sobre_nosotros'); 
});

router.get('/html', (req, res) => {
  res.render('tecnologias/html'); 
});

router.get('/estilos', (req, res) => {
  res.render('tecnologias/estilos'); 
});

router.get('/jquery', (req, res) => {
  res.render('tecnologias/jquery'); 
});

router.get('/nodejs', (req, res) => {
  res.render('tecnologias/nodejs'); 
});

router.get('/equipo', (req, res) => {
  res.render('equipo'); 
});

router.get('/cursos', (req, res) => {
  res.render('cursos'); 
});

router.get('/contactos', (req, res) => {
  res.render('contactos'); 
});

router.get('/marketing', (req, res) => {
  res.render('marketing'); 
});


router.get('/aplicaciones', (req, res) => {
  res.render('aplicaciones'); 
});

router.get('/sistemas', (req, res) => {
  res.render('sistemas'); 
});





module.exports = router;
