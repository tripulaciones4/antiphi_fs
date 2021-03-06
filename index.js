const express = require('express')
const path = require('path');
require('dotenv').config() // Carga fichero variables de entorno
const sequelize= require("./utils/db.js");
const cors = require("cors")
const companiesRouter = require('./routes/companies');
const queriesRouter = require('./routes/queries');
const usersRouter = require('./routes/users');
const jwt = require('jsonwebtoken');

const app = express();


const PORT = process.env.PORT || 4000; //3000 para el front y 4000 para el back
app.use(cors());

app.use(express.urlencoded({extended:false}))
app.use(express.json()) // Para habilitar envio de JSON al servidor

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/api/companies/", companiesRouter)
app.use("/api/queries/", queriesRouter) 
app.use("/api/users/", usersRouter)

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//Listen
app.listen(PORT, () => {
    console.log(`App listening at: ${__dirname} port: ${PORT}`)
    //conectamos con la DB al levantar la app
  try{
  //!!Con .sync crea las tablas si aun no existen, pero Force=true ===> DROP TABLES, por eso dejamos en false para que no borre los datos
  sequelize.sync({force:false})
  console.log("Connection SQL successful")}
  catch(error){
    return ("No se pudo conectar:",error)
  };
  })