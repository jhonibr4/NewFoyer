const express = require('express');
const cors = require('cors')
const routes = require('./routes')
<<<<<<< HEAD
const fs = require('fs')
const crypto = require('crypto')
const connection = require('./database/connection')

const app = express();


let formidable = require('express-formidable')

app.use(cors());
app.use(express.static('public'))
app.use(express.json());
app.use(routes);
app.use(formidable({uploadDir: './public/fotoperfil'}))
app.use(formidable({uploadDir: './public/fotocond'}))
app.use(formidable({uploadDir: './public/fotonoticia'}))

//Updates De Imagens

app.put('/imgSind', async (req , res) => {
    const id_cond = req.fields.info
    const filename = crypto.randomBytes(16).toString('HEX')
    fs.rename(req.files.avatar.path, `public/fotoperfil/${filename}-${req.files.avatar.name}`, (err) => {
    })
    const imgsind = `${filename}-${req.files.avatar.name}`
    await connection('cond')
    .where('id_conds', id_cond)
    .update('imgsind', imgsind)
  
});
app.put('/imgMora', async (req , res) => {
    const id_mora = req.fields.info
    const filename = crypto.randomBytes(16).toString('HEX')
    fs.rename(req.files.avatar.path, `public/fotoperfil/${filename}-${req.files.avatar.name}`, (err) => {
    })
    const imgmora = `${filename}-${req.files.avatar.name}`
    await connection('morador')
    .where('id_mora', id_mora)
    .update('imgmora', imgmora)
   
});
app.put('/imgCond', async (req , res) => {
    const id_cond = req.fields.info
    const filename = crypto.randomBytes(16).toString('HEX')
    fs.rename(req.files.avatar.path, `public/fotocond/${filename}-${req.files.avatar.name}`, (err) => {
    })
    const imgcond = `${filename}-${req.files.avatar.name}`
    await connection('cond')
    .where('id_conds', id_cond)
    .update('imgcond', imgcond)
});
app.post('/noticia', async (req , res) => {
    
    const titulo = req.fields.titulo
    const desc = req.fields.desc
    const id_cond = req.fields.info
    const id_noticia = crypto.randomBytes(4).toString('HEX')
    const filename = crypto.randomBytes(16).toString('HEX')
    fs.rename(req.files.avatar.path, `public/fotonoticia/${filename}-${req.files.avatar.name}`, (err) => {
    })
    const imgcond = `${filename}-${req.files.avatar.name}`
    await connection('noticia')
    .insert({
        'id_noticia':id_noticia,
        'titulo': titulo,
        'imgnoticia': imgcond,
        'desc': desc,
        'id_cond': id_cond
})
console.log(titulo, desc, id_cond)
});


//Porta do Servidor
=======

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
>>>>>>> fe6270242e5916d315ed4b8535fae5d040c390d0

app.listen(3333);

