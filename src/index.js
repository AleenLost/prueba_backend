const express=require('express');
const { PORT } = require('./config');
const equipos = require('./routes/equipos');
const paises = require('./routes/paises');




const app=express();
app.use(express.json())


//RUTAS

app.use('/equipos',equipos);
app.use('/paises',paises)



app.listen(PORT);
console.log('Server on port: ',PORT)