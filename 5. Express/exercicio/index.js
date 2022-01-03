const express = require('express')
const app = express()
const port = 5000
const dog = require('./dogs')
const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// arquivos estáticos
app.use(express.static('public'))

app.use('/dogs', dog)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})
