
exports.up = function(knex) {
  return knex.schema.createTable('morador', function(table){
      table.string('id_mora').primary();
      table.string('nomemora').notNullable();
      table.string('emailmora').notNullable().unique();
      table.string('senhamora').notNullable();
      table.string('cpf').notNullable().unique();
      table.string('status').notNullable();
      table.string('id_cond').notNullable();
      table.integer('blocomora').notNullable();
      table.string('apartmora').notNullable();
      table.string('imgmora')

      table.foreign('id_cond').references('id_conds').inTable('cond');

     
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('morador');
};
