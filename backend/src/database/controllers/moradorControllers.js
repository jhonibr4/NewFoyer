const connection = require('../connection');
const crypto = require('crypto');


module.exports = {
    async index (request, response){
        const id_cond = request.headers.authorization;
        const view = await connection('morador')
        .where('id_cond', id_cond)
        .select('*');
        response.json( view );
    },

    async create (request, response) {
        const id_mora = crypto.randomBytes(4).toString('HEX');
        const { nomemora, emailmora, senhamora, cpf , id_cond , blocomora , apartmora } = request.body;

         const cadastro = await connection('morador').insert({
            id_mora,
            nomemora,
            emailmora,
            senhamora,
            cpf,
            id_cond,
            status:'Aguardando resposta',
            blocomora,
            apartmora,
            imgmora:''
        });
        return response.json({ cadastro })
    },
    async delete (request, response) {
        const id_mora = request.headers.authorization;
        await connection('morador').where('id_mora', id_mora).delete();
        return response.status(200).json({ message:"Pronto" });
    },
    async carregar(request, response) {
        const id_mora = request.headers.authorization;
        const data = await connection('morador')
        .where('id_mora', id_mora)
        .update(request.body)
        
       return response.json(data);
    },
    async verificacao (request , response){
        const id_cond = request.headers.authorization;
        const { status } = request.body
       
        const verificar = await connection('morador')
        .where({
            'status':status,
            'id_cond':id_cond
        })
        .select(
        'id_mora',
        'nomemora',
        'emailmora',
        'cpf',
        'apartmora',
        'blocomora',
        'status',
        'imgmora'
        )

        return response.json(verificar)
    }
    };