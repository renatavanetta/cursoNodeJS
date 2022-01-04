const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodemysql'
})

connection.connect(function (err) {
    if(err){
        console.log(err)
    }

    console.log('Connexão com o banco de dados estabelecida com sucesso!')

    app.listen(3000)
})