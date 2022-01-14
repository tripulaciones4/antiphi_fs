const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../utils/db.js');

class User extends Model {}

User.init(
  {
  id_user:{
    type:DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type:DataTypes.STRING,
    allowNull:false
  },
  last_name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  },
  role:{
    type:DataTypes.STRING,
    allowNull:false
  },
  id_company:{
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull:true,
    }
},{
     sequelize, 
     modelName: 'user' 
     
});

module.exports = User;