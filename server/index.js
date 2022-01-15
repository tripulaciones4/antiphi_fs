const express = require('express')
require('dotenv').config() // Carga fichero variables de entorno
const sequelize= require("./utils/db.js");
const companiesRouter = require('./routes/companies');
const queriesRouter = require('./routes/queries');
const usersRouter = require('./routes/users');

const app = express();
const jwt = require('jsonwebtoken');
const port = 4000 //3000 para el front y 4000 para el back

app.use(express.urlencoded({extended:false}))
app.use(express.json()) // Para habilitar envio de JSON al servidor

app.use("/api/companies/", companiesRouter)
app.use("/api/queries/", queriesRouter) 
app.use("/api/users/", usersRouter)

//Prueba JWT
app.get('/', (req,res)=>{
  res.send('Hola mundo')
})

const validateToken = (req, res, next) => {

  const accessToken = req.headers['authorization'] || req.query.accesstoken;
  if(!accessToken) res.send('Access denied');
  
  jwt.verify(accessToken,process.env.SECRET,(err,user)=>{
      if(err){
        res.send('Access denied, token expired or incorrect');
      }else{
        req.user = user;
        next();
      }
    })
};

app.get('/api', validateToken, (req,res) => {
  res.json({
      tuits : [
        {
          id: 0,
          text:'Primer ejemplo',
          username:'Pipi'
        },
        { 
          id: 1,
          text:'Segundo ejemplo',
          username:'Pipi'
        }
      ]
    })
 });

app.get('/login', (req,res) => {
  res.send(`<html>
              <head>
                <title>Login</title>
              </head>
              <body>
                <form method="POST" action="/auth">
                  Nombre de usuario: <input type="text" name="username"><br>
                  Contraseña: <input type="password" name="password"><br>
                  <input type="submit" value="Iniciar sesión"/>
                </form>
              </body>
            </html>`
  );
});

app.post("/auth", (req,res)=>{  
  const {username, password} = req.body;
  //Ahora tendriamos que consultar a la BBDD y ver que existen
  const user = {username: username}; //Aqui podriamos poner cualquier info

  const accessToken = generateAccessToken(user);

  res.header('authorization', accessToken).json({
    message:"Usuario autenticado",
    token: accessToken
  });

});

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET, {expiresIn: '5m'}); 
};




 

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