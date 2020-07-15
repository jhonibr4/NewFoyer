const crypto = require('crypto');
const connection = require('../connection');

module.exports = {
    async index (request, response){
    const { id_conds } = request.body

    const conds = await connection('cond')
     .select('nomecond')
     .where('id_conds',id_conds)
     .first();
        return response.json(conds);
    },
    async todos (request, response){
   const id_conds = request.headers.authorization;

    const conds = await connection('cond')
    
     .select('*')
   
        return response.json(conds);
    },
    

    async create(request, response) {
        const { nomesind , emailsind, senhasind , cnpj , cep , cidade , UF, nomecond, num , blocosind , apartsind} = request.body;
        const id_conds = crypto.randomBytes(4).toString('HEX');
    
        await connection('cond').insert({
            id_conds,
            nomesind,
            emailsind,
            senhasind,
            cnpj,
            cep,
            cidade,
            UF,
            nomecond,
            num,
            blocosind,
            apartsind,
            imgcond:'',
            imgsind:'',
            descricao:''
        })
        return response.json({id_conds});
    },
    async delete(request,response) {
        
        const id_conds = request.headers.authorization;
        await connection('cond').where('id_conds', id_conds).delete();
        return response.send('Pronto');
    },
    async update(request, response) {
        const id_conds = request.headers.authorization;
        const conds = await connection('cond')
        .where('id_conds', id_conds)
        .update(request.body);
        
       return response.json("Ok");
    },
}