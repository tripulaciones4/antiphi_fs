const express = require('express')
require('dotenv').config() // Carga fichero variables de entorno
const sequelize= require("./utils/db.js");
const companiesRouter = require('./routes/companies')
const queriesRouter = require('./routes/queries')
const usersRouter = require('./routes/users')

const app = express()
const port = 4000 //3000 para el front y 4000 para el back

app.use(express.json()) // Para habilitar envio de JSON al servidor

app.use("/api/companies/", companiesRouter)
app.use("/api/queries/", queriesRouter) 
app.use("/api/users/", usersRouter)  


//Listen
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
    //conectamos con la DB al levantar la app
  try{
  //!!Con .sync crea las tablas si aun no existen, pero Force=true ===> DROP TABLES, por eso dejamos en false para que no borre los datos
  sequelize.sync({force:false})
  console.log("Connection SQL successful")}
  catch(error){
    return ("No se pudo conectar:",error)
  };
  })