const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bcrypt = require('bcrypt')

const conn = require ('./db/conn')
const Cliente = require('./models/Cliente')
const Produto = require('./models/Produto')

const PORT = 3000
const hostname = 'localhost'

let log = false

//----------

app.use(express.urlencoded({extend:true}))
app.use(express.json())
app.use(express.static('public'))

//----------

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

//----------

app.get('/', (req,res)=>{
    res.render('home', {log})
})

app.post('/login', async (req,res)=>{
    const email = req.body.email
    const senha = req.body.senha
    const pesq = await Cliente.findOne(
        {raw: true, where: {email:email, senha:senha}}
        )

    console.log(pesq)
    if(pesq == null){
        console.log('user not found')
        res.status(200).redirect('/')
    }else if(pesq.email == email && pesq.senha == senha){
        console.log('user found')
        log = true
        res.render('home', {log})
    }else{
        res.status(200).redirect('/')
    }
})

app.get('/login', (req,res)=>{
    res.render('login', {log})
})

app.get('/', (req,res)=>{
    res.send({message: "teste de comunicacao"})
})

//----------

conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando ${hostname}:${PORT}`)
    })
}).catch((error)=>{
    console.error('Erro de conexão com o BD'+error)
})