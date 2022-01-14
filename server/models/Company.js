const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../utils/db.js');

class Company extends Model {}
Company.init({
  id_company:{
    type:DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false
  },
  sector:{
    type:DataTypes.STRING,
    allowNull:false
  },
  CIF:{
    type:DataTypes.STRING,
    allowNull:false
  },
},{
     sequelize, 
     modelName: 'company' 
     
});
module.exports = Company;