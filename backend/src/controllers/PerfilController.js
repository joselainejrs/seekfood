const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const usuarios_id = request.headers.authorization;

        const funcionarios = await connection('funcionarios')
        .where('usuarios_id', usuarios_id)
        .select('*');

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
}