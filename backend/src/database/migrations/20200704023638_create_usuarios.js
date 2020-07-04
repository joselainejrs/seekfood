
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function (table) {
        table.increments('id').primary(); 
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('profissao').notNullable();
        table.string('telefone').notNullable();
        table.string('codigo').notNullable();
        table.string('cnpj_cpf').notNullable();
        table.string('senha').notNullable();
        table.string('segmento').notNullable();

        // chave estrangeira da tabela endereço
        table.string('enderecos_id').notNullable();

        table.foreign('enderecos_id').references('enderecos').inTable('enderecos')

        // chave estrangeira da tabela propriedade
        table.string('propietarios_id').notNullable();

        table.foreign('propietarios_id').references('propietarios').inTable('propietarios')

      }); 
};

exports.down = function(knex) {
  return knex.schema.droptable('usuarios')
};
