const connection = require("../database/connection");

module.exports = {
    async create(request, response){
        const { email, senha } = request.body;

        const usuarios = await connection('usuarios')
        .where('email', email)
        .where('senha', senha)
        .select('*')
        .first();

        if(!usuarios){
            return response.status(400).json({error: 'Login não permitido, tente novamente'});
        }

        return response.json(usuarios)
    }
}