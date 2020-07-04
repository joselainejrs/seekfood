const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const enderecos = await connection('enderecos').select('*');

        return response.json(enderecos);
    }, 

    async create(request, response) {
        const { rua_av, numero, cep, complemento } = request.body;

        await connection('enderecos').insert({
            rua_av,
            numero, 
            cep, 
            complemento,
        })
    
        return response.json();
    },

    // alterar dados 
    async update(request, response){
        const { rua_av, numero, cep, complemento } = request.body;
        const { id } = request.params

        await connection('enderecos')
        .update({ rua_av, numero, cep, complemento })
        .where({ id });
        
       

        return response.json();
    },

    async delete(request, response){
        const { id } = request.params

        await connection('enderecos')
        .where({ id, id })
        .delete();

        return response.json();
    }
};