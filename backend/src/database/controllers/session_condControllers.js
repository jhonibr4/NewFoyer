const connection = require('../connection');

module.exports = {
    async create_cond ( request, response) {
        const { emailsind , senhasind } = request.body;
       
        const login = await connection('cond')
        .where({
            'emailsind': emailsind,
            'senhasind': senhasind
      
        })
        .first()
        
        

        if(login){
            return response.status(200).json(login)
        }
        
        return response.status(400).json({ error:'email ou senha incorreta, tente novamente.' })
        
    }

}