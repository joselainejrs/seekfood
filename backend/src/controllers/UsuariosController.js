const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    async index(request, response) {
        const usuarios = await connection('usuarios').select('*');

        return response.json(usuarios);
    }, 
    
    async create(request, response) {
        const {nome_razaosocial, email, telefone, cnpj_cpf, senha, seguimento, preferencia, horario, rua_av, numero, cep, complemento } = request.body;

        const codigo = crypto.randomBytes(6).toString('HEX');

        await connection('usuarios').insert({
            codigo,
            nome_razaosocial, 
            email, 
            telefone, 
            cnpj_cpf,  
            senha, 
            seguimento,
            preferencia,
            horario,
            rua_av,
            numero, 
            cep, 
            complemento,
        })
    
        return response.json({codigo});
    },

    // alterar dados 
    async update(request, response){
        const { nome_razaosocial, email, telefone, cnpj_cpf, senha, seguimento, preferencia, horario, rua_av, numero, cep, complemento } = request.body;
        const { id } = request.params

        await connection('usuarios')
        .update({ nome_razaosocial, email, telefone, cnpj_cpf, senha, seguimento, preferencia, horario, rua_av, numero, cep, complemento })
        .where({ id });
        

        return response.json();
    },

    async delete(request, response){
        const { id } = request.params

        await connection('usuarios')
        .where({ id, id })
        .delete();

        return response.json();
    }
};