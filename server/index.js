const express = require('express')
const companiesRouter = require('./routes/companies')
const entriesRouter = require('./routes/entries')
const usersRouter = require('./routes/users')

const app = express()
const port = 4000 //3000 para el front y 4000 para el back

app.use(express.json()) // Para habilitar envio de JSON al servidor
require('dotenv').config() // Carga fichero variables de entorno

app.use("/api/companies/", companiesRouter)
app.use("/api/entries/", entriesRouter) 
app.use("/api/users/", usersRouter)  


//Listen
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })