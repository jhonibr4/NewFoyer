const express = require('express');
<<<<<<< HEAD
const multer = require('multer');
const multerConfig = require('./config/multer')

const routes = express.Router();
const fs = require('fs')
const crypto = require('crypto')
const app = express()
=======
const routes = express.Router();
const connection = require('./database/connection');

>>>>>>> fe6270242e5916d315ed4b8535fae5d040c390d0

const condControllers = require('./database/controllers/condControllers');
const moradorControllers = require('./database/controllers/moradorControllers');
const session_condControllers = require('./database/controllers/session_condControllers');
const session_moraControllers = require('./database/controllers/session_moraControllers');
<<<<<<< HEAD
const noticiaControllers = require('./database/controllers/noticiaControllers');
const msgControllers = require('./database/controllers/msgControllers');

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'public/fotoperfil/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage })


=======
>>>>>>> fe6270242e5916d315ed4b8535fae5d040c390d0

routes.post('/cond', condControllers.create);
routes.post('/conds', condControllers.index);
routes.get('/cond', condControllers.todos);
routes.delete('/cond', condControllers.delete);
<<<<<<< HEAD
routes.put('/cond', condControllers.update);
=======
routes.put('/cond', condControllers.carregar);

>>>>>>> fe6270242e5916d315ed4b8535fae5d040c390d0

routes.post('/morador', moradorControllers.create);
routes.get('/morador', moradorControllers.index);
routes.delete('/morador', moradorControllers.delete);
routes.put('/morador', moradorControllers.carregar);

<<<<<<< HEAD

routes.post('/mensagem', msgControllers.createMsg)
routes.get('/mensagemEnvio', msgControllers.indexMsgEnviada)
routes.get('/mensagemRecebe', msgControllers.indexMsgRecebida)

routes.get('/noticia', noticiaControllers.index)
routes.delete('/noticia', noticiaControllers.delete)

=======
>>>>>>> fe6270242e5916d315ed4b8535fae5d040c390d0
routes.post('/sessioncond', session_condControllers.create_cond);
routes.post('/sessionmora', session_moraControllers.create_mora)




module.exports = routes
