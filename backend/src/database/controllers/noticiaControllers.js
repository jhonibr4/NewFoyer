const connection = require('../connection')

module.exports = {
    async index ( request , response ){
        const id_cond = request.headers.authorization;
        const index = await connection('noticia')
        .where('id_cond', id_cond)
        .select('*')
        response.json(index)
    },
    async delete ( request , response ){
        
        const del = await connection('noticia')
        .where('id_noticia', null)
        .delete('*')
         return response.json(del)
    }
}