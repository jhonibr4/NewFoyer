
exports.up = function(knex) {
    return knex.schema.createTable('cond', function (table){

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

    })
};

exports.down = function(knex) {
   return knex.schema.dropTable('cond')
};
