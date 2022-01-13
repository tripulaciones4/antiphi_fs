const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../utils/db.js');

class User extends Model {}
User.init({
  name: DataTypes.STRING,
  last_name:DataTypes.STRING,
  email:DataTypes.STRING,
  id_company:DataTypes.STRING,
  password:DataTypes.STRING,
  incorporation: DataTypes.DATE,
  role:DataTypes.STRING
},{
     sequelize, 
     modelName: 'user' 
     
});

module.exports = User;