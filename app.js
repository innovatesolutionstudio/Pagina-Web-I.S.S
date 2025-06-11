const express = require('express');
const app = express();
const path = require('path');
const port = 3002;

// Configurar motor de plantillas y ruta de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importar y usar las rutas
const indexRoutes = require('./routes/index');



app.use(indexRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


