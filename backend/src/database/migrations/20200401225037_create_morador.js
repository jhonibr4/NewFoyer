
exports.up = function(knex) {
  return knex.schema.createTable('morador', function(table){
      table.string('id_mora').primary();
<<<<<<< HEAD
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
=======
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('senha').notNullable();
      table.string('cpf').notNullable();
      table.string('status').notNullable();
      table.string('id_cond').notNullable();

>>>>>>> fe6270242e5916d315ed4b8535fae5d040c390d0
     
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('morador');
};
