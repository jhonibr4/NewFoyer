
exports.up = function(knex) {
    return knex.schema.createTable('cond', function (table){
<<<<<<< HEAD
        table.string('id_conds').primary();
        table.string('nomesind').notNullable();
        table.string('emailsind').notNullable().unique();
        table.string('senhasind').notNullable();
        table.string('cnpj').notNullable().unique();
        table.string('cep').notNullable();
        table.string('num').notNullable();
        table.string('cidade').notNullable();
        table.string('UF', 2).notNullable();
        table.string('nomecond').notNullable();
        table.integer('blocosind');
        table.string('apartsind');
        table.string('imgcond');
        table.string('imgsind');
        table.string('descricao');
=======
        table.string('id_cond').primary()
        table.string('email').notNullable()
        table.string('senha').notNullable()
        table.string('cnpj').notNullable()
        table.string('cep').notNullable()
        table.string('cidade').notNullable()
        table.string('UF', 2).notNullable()
        table.string('nomecond').notNullable()
        table.string('num').notNullable();
      
>>>>>>> fe6270242e5916d315ed4b8535fae5d040c390d0
    })
};

exports.down = function(knex) {
   return knex.schema.dropTable('cond')
};
