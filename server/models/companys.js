const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../utils/db.js');

class Company extends Model {}
Company.init({
  name: DataTypes.STRING,
  description:DataTypes.STRING,
  sector:DataTypes.STRING,
  id_owner:DataTypes.INTEGER,
  CIF:DataTypes.INTEGER
},{
     sequelize, 
     modelName: 'user' 
     
});

module.exports = Company;