const connection =require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const usuarios = await connection('usuarios').select('*');

        return response.json(usuarios);
    }, 

    async create(request, response) {
        const { nome, email, telefone, cnpj_cpf, profissao, senha, seguimento } = request.body;

        const codigo = crypto.randomBytes(6).toString('HEX');

        await connection('usuarios').insert({
            codigo,
            nome, 
            email, 
            telefone, 
            cnpj_cpf, 
            profissao, 
            senha, 
            seguimento,
        })
    
        return response.json({id});
    }
};