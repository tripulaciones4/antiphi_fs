const {Company}=require("../models/indexDB")
const companies = {
     
    findCompany: async (req, res) =>{
        try{ 
            const id= req.params.id;
            let company
            id? company= await Company.findByPk(id)
                :company=await Company.findAll()
            res.json(company)

        }catch(err){
            res.json(err)
        }
    },

    findCompanyByName: async (req, res) =>{
        try{ 
            const name= req.query.name
            const company=await Company.findAll({
                where:{
                    name:name,
                }})
            res.json(company)

        }catch(err){
            res.json(err)
        }
    },


    // {
    //     "name": "NASA",
    //     "description": "Cohetitos y movidas espaciales",
    //     "sector": "Aeroespacial",
    //     "CIF": "9019832-A"
    //   }


    createCompany: async (req, res) =>{
        try{ 
            const newCompany = await Company.create(req.body)
            res.json(newCompany)
        }catch(err){
            res.json(err)
        }
    },



}


module.exports = companies