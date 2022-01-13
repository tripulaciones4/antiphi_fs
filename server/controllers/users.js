
const users = {

    getAllUsers : async (req, res) =>{
        try{ 
            await console.log("Funciona el mostrar todos los usuarios")

        }catch(err){
            console.log(err)
        }
    },
    
    findUser: async (req, res) =>{
        try{ 
            await console.log("Funciona el buscar un usuario")

        }catch(err){
            console.log(err)
        }
    },

    createUser: async (req, res) =>{
        try{ 
            await console.log("Funciona la creación de usuario")

        }catch(err){
            console.log(err)
        }
    }
}


module.exports = users