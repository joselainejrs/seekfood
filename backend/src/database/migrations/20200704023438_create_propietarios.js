exports.up = function(knex) {
    return knex.schema.createTable('propietarios', function (table) {
        table.increments('id').primary();  
        table.string('nome_proprietario').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('senha').notNullable();
        
      }); 
};


exports.down = function(knex) {
    return knex.schema.droptable('propietarios')
};
