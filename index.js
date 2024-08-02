const express = require("express");
const path = require("path");
const app = express();
const puerto = 3000;

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(puerto, () => {
    console.log(`Servidor en puerto ${puerto}`);
});