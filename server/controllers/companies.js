const companies = {

    getAllCompanies : async (req, res) =>{
        try{ 
            await console.log("Funciona el mostrar todas las empresas")

        }catch(err){
            console.log(err)
        }
    },
    
     
    findCompany: async (req, res) =>{
        try{ 
            await console.log("Funciona el buscar una empresa")

        }catch(err){
            console.log(err)
        }
    },

    createCompany: async (req, res) =>{
        try{ 
            await console.log("Funciona el crear una empresa")

        }catch(err){
            console.log(err)
        }
    },



}


module.exports = companies