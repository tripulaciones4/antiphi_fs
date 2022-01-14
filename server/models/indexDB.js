const Company= require("./Company");
const Query=require("./Query");
const User= require("./User");

User.belongsTo(Company,{foreignKey: "id_company"});
Company.hasMany(User,{foreignKey:"id_company"});

Query.belongsTo(User,{foreignKey: "id_user"});
User.hasMany(Query,{foreignKey:"id_user"});

module.exports={
    Company,User,Query
}