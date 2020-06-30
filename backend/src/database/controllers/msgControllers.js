const connection = require('../connection');
const crypto = require('crypto')

 module.exports = {
     
        async createMsg ( request , response ){
            const id_mora = request.params;
            const id_msg = crypto.randomBytes(4).toString('hex')
            const { msg , assunto , nome , imgperfil , id_envio , id_recebe } = request.body;
            const mensagem = await connection('mensagem')
            .insert({
                id_msg,
                nome,
                msg,
                assunto,
                imgperfil,
                id_envio,
                id_recebe
            })
            return response.json(mensagem)
        },
        async indexMsgEnviada ( request , response ){
            const { page = 1 } = request.query;

            const [ count ] = await connection('mensagem').count();

            console.log(count)

            const id_user = request.headers.authorization;
            const mensagem = await connection('mensagem')
            .limit(5)
            .offset((page - 1) * 5)
            .where('id_envio', id_user)
            .select('*')
            return response.json(mensagem)
        },
        async indexMsgRecebida ( request , response ){
            const id_user = request.headers.authorization;

            const { page = 1 } = request.query;

            const [ count ] = await connection('mensagem').count();

            console.log(count)

            const mensagem = await connection('mensagem')
            .limit(5)
            .offset((page - 1) * 5)
            .where('id_recebe', id_user)
            .select('*')
            return response.json(mensagem)
        }
 }
    