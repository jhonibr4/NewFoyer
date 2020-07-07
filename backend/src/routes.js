const express = require('express');
const routes = express.Router();

const condControllers = require('./database/controllers/condControllers');
const moradorControllers = require('./database/controllers/moradorControllers');
const session_condControllers = require('./database/controllers/session_condControllers');
const session_moraControllers = require('./database/controllers/session_moraControllers');
const noticiaControllers = require('./database/controllers/noticiaControllers');
const msgControllers = require('./database/controllers/msgControllers');
const verificaMoraControllers = require('./database/controllers/verificacaoMoraControllers');

routes.post('/cond', condControllers.create);
routes.post('/conds', condControllers.index);
routes.get('/cond', condControllers.todos);
routes.delete('/cond', condControllers.delete);
routes.put('/cond', condControllers.update);

routes.post('/morador', moradorControllers.create);
routes.get('/morador', moradorControllers.index);
routes.delete('/morador', moradorControllers.delete);
routes.put('/morador', moradorControllers.carregar);

routes.post('/verificarMora', verificaMoraControllers.verificacaoMora);
routes.put('/statusMora', verificaMoraControllers.statusMora);

routes.post('/mensagem', msgControllers.createMsg)
routes.get('/mensagemEnvio', msgControllers.indexMsgEnviada)
routes.get('/mensagemRecebe', msgControllers.indexMsgRecebida)

routes.get('/noticia', noticiaControllers.index)
routes.delete('/noticia', noticiaControllers.delete)

routes.post('/sessioncond', session_condControllers.create_cond);
routes.post('/sessionmora', session_moraControllers.create_mora)

module.exports = routes