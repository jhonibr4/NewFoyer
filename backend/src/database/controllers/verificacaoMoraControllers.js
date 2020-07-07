const connection = require('../connection');

module.exports={
    async verificacaoMora (request , response){
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
    },
    async statusMora (request, response){
        const id_mora = request.headers.authorization;
        const { newStatus } = request.body;

        const alterarStatus = await connection('morador')
        .where('id_mora',id_mora)
        .update('status', newStatus)

        return response.json(alterarStatus)
    }
}