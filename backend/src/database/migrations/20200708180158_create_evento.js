
exports.up = function(knex) {
    return knex.schema.createTable('eventos', function(table){
      table.string('id_evento').primary();
      table.string('id_condEvento').notNullable();
      table.string('data').notNullable();
      table.string('nomeLocal').notNullable();
      table.string('tituloEvento').notNullable();
      table.string('descricao').notNullable();
      table.string('horaIni').notNullable();
      table.string('horaTer').notNullable();
      table.string('resposta').notNullable();
  
      table.string('id_morador').notNullable();
  
      table.foreign('id_morador').references('id_mora').inTable('morador');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('eventos')
  };
  