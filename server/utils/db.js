const { Sequelize } = require('sequelize');

//Configuramos la conexión sql con los parametros de la base de datos alojados en nuestro archivo .env: database,username,,password y host.
const sequelize= new Sequelize(
    process.env.SQL_DATABASE,
    process.env.SQL_USER,
    process.env.SQL_PASS,
    {
        host:process.env.SQL_HOST,
        dialect: 'postgres',
        logging: false
    }
);
module.exports=sequelize