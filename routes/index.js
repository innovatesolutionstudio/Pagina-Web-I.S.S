const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.render('index');
});



router.get('/Jerome-Jimenez', (req, res) => {
  res.render('./perfiles/jerome');
});

router.get('/Kevin-Quispe', (req, res) => {
  res.render('./perfiles/kevin');
});


router.get('/Cindy-Torrez', (req, res) => {
  res.render('./perfiles/cindy');
});


router.get('/Eikar-Quispe', (req, res) => {
  res.render('./perfiles/eikar');
});




module.exports = router;
