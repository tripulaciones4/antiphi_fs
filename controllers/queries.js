const {Query}=require("../models/indexDB")
const queries = {

    findQuery: async (req, res) =>{
        try{ 
            const id= req.params.id;
            let query
            id? query= await Query.findByPk(id, {include:["user"]})
                :query=await Query.findAll({include:["user"]})
            res.json(query)
        }catch(err){
            res.json(err)
        }
    },

    findQueryByUser: async (req, res) =>{
        try{ 
            const id_user= req.params.id;
            const query= await Query.findAll({where:{id_user:id_user}, include:["user"]})
            res.json(query)

        }catch(err){
            res.json(err)
        }
    },

    findQueryByCompany: async (req, res) =>{
        try{ 
            const id= req.params.id;
            const queries= await Query.findAll({include:["user"]})
           
            const queriesCompany= await queries.filter(query=>query.user.id_company==id)
            res.json(queriesCompany)

        }catch(err){
            res.json(err)
        }
    },



    createQuery: async (req, res) =>{
        
        try{ 
            const newQuery = await Query.create(req.body)
            res.json(newQuery)
        }catch(err){
            res.json(err)
        }
    },

}


module.exports = queries