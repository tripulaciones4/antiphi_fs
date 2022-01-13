const entries = {

    getAllEntries : async (req, res) =>{
        try{ 
            await console.log("Funciona el mostrar todas las entradas de url")

        }catch(err){
            console.log(err)
        }
    },

    
    findEntry: async (req, res) =>{
        try{ 
            await console.log("Funciona el buscar una entrada de url")

        }catch(err){
            console.log(err)
        }
    },

    createEntry: async (req, res) =>{
        try{ 
            await console.log("Funciona el crear una entrada de url")

        }catch(err){
            console.log(err)
        }
    },

}


module.exports = entries