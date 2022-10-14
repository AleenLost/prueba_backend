const express=require('express');
const { PORT } = require('./config');
const equipos = require('./routes/equipos');
const paises = require('./routes/paises');




const app=express();
app.use(express.json())
app.set("port",PORT);

//RUTAS

app.use('/equipos',equipos);
app.use('/paises',paises)



app.listen(app.get("port"),()=>{
    console.log('Server corriendo en el puerto:'+app.get("port"));
})