const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.render('index');
});



router.get('/jerome', (req, res) => {
  res.render('./perfiles/jerome');
});



module.exports = router;
