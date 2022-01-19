const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../utils/db.js');

class Query extends Model {}
Query.init({
  id_query:{
    type:DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  url: {
    type:DataTypes.STRING,
    allowNull:false
  },
  analysis_result:{
    type:DataTypes.STRING,
    allowNull:false
  },
  id_user:{
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull:false,
    },
},{
     sequelize, 
     modelName: 'query' 
     
});

module.exports = Query;