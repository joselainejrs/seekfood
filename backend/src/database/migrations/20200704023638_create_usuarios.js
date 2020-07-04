
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function (table) {
        table.increments('id').primary(); 
        table.string('codigo').notNullable();
        table.string('nome_razaosocial').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('cnpj_cpf').notNullable();
        table.string('senha').notNullable();
        table.string('seguimento').notNullable();
        table.string('preferencia').notNullable();
        table.string('horario').notNullable();
        table.string('rua_av').notNullable();
        table.string('numero').notNullable();
        table.string('cep').notNullable();
        table.string('complemento').notNullable();

      }); 
};

exports.down = function(knex) {
  return knex.schema.droptable('usuarios')
};
