
exports.up = function(knex) {
    return knex.schema.createTable('funcionarios', function (table) {
        table.increments('id').primary();  
        table.string('nome').notNullable();        
        table.string('profissao').notNullable();        
        table.string('senha').notNullable();        
        
        // chave estrangeira da tabela endereço
        table.string('usuarios_id').notNullable();

        table.foreign('usuarios_id').references('codigo').inTable('usuarios')
      }); 
};


exports.down = function(knex) {
    return knex.schema.droptable('funcionarios');
};
