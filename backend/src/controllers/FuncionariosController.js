const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const funcionarios = await connection('funcionarios').select('*');

        return response.json(funcionarios);
    }, 
    
    async create(request, response) {
        const {nome, profissao, senha } = request.body;
        const usuarios_id = request.headers.authorization;

        const [id] = await connection('funcionarios').insert({
            nome, 
            profissao, 
            senha,
            usuarios_id
        })
    
        return response.json({id});
    },

    // alterar dados 
    async update(request, response){
        const { nome, profissao, senha } = request.body;
        const { id } = request.params

        await connection('funcionarios')
        .update({ nome, profissao, senha })
        .where({ id });
        
       

        return response.json();
    },

    //deletar dados
    async delete(request, response){
        const { id } = request.params

        await connection('funcionarios')
        .where({ id, id })
        .delete();

        return response.json();
    }
};