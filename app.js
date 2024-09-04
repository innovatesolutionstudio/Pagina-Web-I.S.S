const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Configura la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Importa y usa el enrutador de páginas
const paginaRoutes = require('./src/routes/pagina/pagina');
app.use('/', paginaRoutes);


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
