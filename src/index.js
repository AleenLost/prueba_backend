const express=require('express');
const equipos = require('./routes/equipos');
const paises = require('./routes/paises');




const app=express();
app.use(express.json());
//RUTAS

app.use('/equipos',equipos);
app.use('/paises',paises)

const PORT=3000;

app.listen(process.env.PORT || PORT,()=>{
    console.log('Server corriendo en el puerto:'+app.get("port"));
})