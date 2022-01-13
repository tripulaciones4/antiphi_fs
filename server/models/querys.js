const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../utils/db.js');

class Query extends Model {}
Query.init({
  url: DataTypes.STRING,
  analysis_result:DataTypes.STRING,
  id_user:DataTypes.INTEGER,
  date: DataTypes.DATE
},{
     sequelize, 
     modelName: 'query' 
     
});

module.exports = Query;