const connection = require('../connection');
const crypto = require('crypto');
const { index } = require('./condControllers');


module.exports={
    async create (request , response){
        const id_evento = crypto.randomBytes(4).toString('HEX');
        const { id_condEvento , data , nomeLocal , descricao , horaIni , horaTer , id_morador , tituloEvento } = request.body;

        const createEvento = await connection('eventos').insert({
            id_evento,
            id_condEvento,
            data,
            nomeLocal,
            descricao,
            horaIni,
            horaTer,
            id_morador,
            resposta:'Aguardando Resposta',
            tituloEvento
        });
        return response.json({createEvento})
    },
    async carregarEventoMora ( request , response ){
        const id_morador = request.headers.authorization;
        const lerEvento = await connection('eventos')
        .where({
            'id_morador':id_morador,
        })
        .select('*')
        return response.json(lerEvento)
    },
    async carregarEventoSind ( request , response ){
        const id_cond = request.headers.authorization;
        const lerEvento = await connection('eventos')
        .where({
            'id_condEvento':id_cond,
        })
        .select('*')
        return response.json(lerEvento)
    },
    async autorizacaoEvento ( request , response ){
        const id_mora = request.headers.authorization;
        const { resposta } = request.body
        const verificarEvento = await connection('eventos')
        .where('id_morador',id_mora)
        .update('resposta',resposta)

        return response.json('Ok')
    }
}