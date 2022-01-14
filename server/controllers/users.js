const {User,Company}= require("../models/indexDB")



const users = {
    
    findUser: async (req, res) =>{
        try{ 
            const id= req.params.id;
            let user
            id? user= await User.findByPk(id,{include:["company"]}): user=await User.findAll({include:["company"]})
            res.json(user)

        }catch(err){
            res.json(err)
        }
    },

    findUserByName: async (req, res) =>{
        try{ 

            const name= req.query.name
            const last_name= req.query.last_name
            let user
            name?
                last_name?
                    user=await User.findAll({
                        where:{
                            name:name,
                            last_name:last_name
                        },
                        include:["company"]})
                        :user=await User.findAll({
                            where:{
                                name:name,
                            },
                            include:["company"]})
            :last_name?
                    user=await User.findAll({
                         where:{
                            last_name:last_name
                        },
                        include:["company"]})
                    :user=await User.findAll({include:["company"]})
            res.json(user)

        }catch(err){
            res.json(err)
        }
    },

    findUserByEmail: async (req, res) =>{
        try{ 
            const email= req.params.email
             const user=await User.findAll({where:{email:email},include:["company"]});
            res.json(user)

        }catch(err){
            res.json(err)
        }
    },


    updateUser: async (req, res) =>{
        try{
            const id= req.params.id;
            const newCompany=req.query.id_company
            let user
            newCompany?
            user= await User.update({id_company:newCompany},{
                where:{id_user:id},
            })
            :user= await User.update({id_company:null},{
                where:{id_user:id},
            })
            res.json(user)

        }catch(err){
            res.json(err)
        }
    },



//req.body=
// {
//   "name": "M.",
//   "last_name":"Rajoy",
//   "email":"mariano@test.com",
//   "company": 1 || null
//   "password":"123456",
//   "incorporation": "2022-01-13 16:10:05.272 +00:00",
//   "role":"admin"
// }
    createUser: async (req, res) =>{
        try{ 
            const newUser = await User.create(req.body)
            res.json(newUser)
        }catch(err){
            res.json(err)
        }
    }
}


module.exports = users