const express = require('express')
const path = require('path')
const router = express.Router()

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/dogs.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    //leitura da tabela users para resgatar um usuario
    console.log(`Estamos buscando pelo dog: ${id}`)
})

router.post('/save', (req, res) => {
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do dog é ${name} e ele tem ${age} anos.`)
})

module.exports = router