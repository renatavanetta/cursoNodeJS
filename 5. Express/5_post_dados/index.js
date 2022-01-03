const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura da tabela users para resgatar um usuario
    console.log(`Estamos buscando pelo usuario: ${id}`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.post('/users/save', (req, res) => {
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})
