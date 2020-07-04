const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const propietarios = await connection('propietarios').select('*');

        return response.json(propietarios);
    }, 

    async create(request, response) {
        const { nome_proprietario, email, telefone, senha } = request.body;

        await connection('propietarios').insert({
            nome_proprietario,
            email, 
            telefone, 
            senha,
        })
    
        return response.json();
    },

    // alterar dados 
    async update(request, response){
        const { nome_proprietario, email, telefone, senha } = request.body;
        const { id } = request.params

        await connection('propietarios')
        .update({nome_proprietario, email, telefone, senha})
        .where({ id });

        return response.json();
    },

    async delete(request, response){
        const { id } = request.params

        await connection('propietarios')
        .where({ id, id })
        .delete();

        return response.json();
    }
};