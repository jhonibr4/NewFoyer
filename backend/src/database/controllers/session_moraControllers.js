const connection = require('../connection');

module.exports = {
    

    async create_mora ( request, response) {
        const { emailmora, senhamora } = request.body;
       
        const login = await connection('morador')
        .where({
            'emailmora': emailmora,
            'senhamora': senhamora
      
        })
        .join('cond', 'cond.id_conds', '=', 'morador.id_cond')
        .select('morador.*',
        'cond.nomecond',
        'cond.imgcond',
        'cond.descricao')
        .first()
        
        

        if(login){
            return response.json(login)
        }

        return response.status(400).json({ error:'email ou senha incorreta, tente novamente.' })
    }

}