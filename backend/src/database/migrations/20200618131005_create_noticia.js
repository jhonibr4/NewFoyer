
exports.up = function(knex) {
    return knex.schema.createTable('noticia', function (table){
        table.string('id_noticia').primary();
        table.string('titulo').notNullable();
        table.string('desc').notNullable();
        table.string('imgnoticia').notNullable();
        table.string('id_cond').notNullable();

        table.foreign('id_cond').references('id_conds').inTable('cond')
        

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('noticia')
};
