exports.up = function(knex) {
    return knex.schema.createTable('enderecos', function (table) {
        table.increments('id').primary();   
        table.string('rua_av').notNullable();
        table.string('numero').notNullable();
        table.string('cep').notNullable();
        table.string('complemento').notNullable();
      }); 
};


exports.down = function(knex) {
    return knex.schema.droptable('enderecos')
};
