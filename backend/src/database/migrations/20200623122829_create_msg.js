
exports.up = function(knex) {
    return knex.schema.createTable('mensagem', function(table){
        table.string('id_msg').primary();
        table.string('assunto').notNullable();
        table.string('msg').notNullable();
        table.string('imgperfil').notNullable();
        table.string('nome').notNullable();
        table.string('id_envio').notNullable();
        table.string('id_recebe').notNullable();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('mensagem')
};
