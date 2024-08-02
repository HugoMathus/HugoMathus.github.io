const express = require("express");
const app = express();
puerto = 3000;

app.use(express.static('public')) // Servir archivos estaticos desde la carpeta "public"

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/Polemica.html');
});

app.listen(puerto, ()=>{
    console.log('servidor en puerto ${puerto}')
});

