const {User,Company}= require("../models/indexDB")
const bcrypt = require('bcryptjs');
require('dotenv').config() // Carga fichero variables de entorno
const jwt = require('jsonwebtoken');

const users = {
    
    findUser: async (req, res) =>{
        try{ 
            const id= req.params.id;
            let user
            id? user= await User.findByPk(id,{include:["company"]})
            : user=await User.findAll({include:["company"]})
            res.json(user)

        }catch(err){
            res.json(err)
        }
    },

    findUsersByCompany: async (req, res) =>{
        try{ 
            const id_company= req.params.id_company;
            let users= await User.findAll({where:{id_company:id_company}, include:["company"]})
            res.json(users)

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
//   "id_company": 1 || null
//   "password":"123456",
//   "incorporation": "2022-01-13 16:10:05.272 +00:00",
//   "role":"admin"
// }
    createUser: async (req, res) =>{
        try{ 
            const {name, last_name ,email , id_company, password, department , role} = req.body;
            const hash = await  bcrypt.hash(password,10);
            const newUser = await User.create({
                name: name, 
                last_name: last_name ,
                email: email , 
                id_company: id_company, 
                password: hash, 
                department: department, 
                role: role})

            res.status(200).json(newUser)

        }catch(err){
            res.status(500).json(err)
        }
    },

    // {
    //     "email": "sar@test.com",
    //     "password":"123456"
    //   }

    loginUser: async (req,res)=>{
        try{ 
            const {email, password} = req.body;
            const user = await User.findOne({where:{email: email}});

            if (user){
                const validPass = await bcrypt.compare(password, user.password);
                if(validPass){
                  
                    const payload = {check:true};
                    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '30m'}); 

                    res.status(200).json({
                        mensaje: 'Valid Email and Password y autenticación correcta',
                        token: token
                    })

                }else{
                    res.json("Wrong Pass!")
                }
            }else{
                res.status(404).json("User not found");
            }
            
        }catch(err){
            res.json(err)
        }

    },
    //{
        // id: 1,
        //email:"marianopunto@test.com"
    // }

    deleteUser: async (req, res) =>{
        try{
            const {id,email} = req.body;
            let user= await User.destroy({
                where:{id_user:id,email:email},
            })
            res.json(user)

        }catch(err){
            res.json(err)
        }
    },
}




module.exports = users