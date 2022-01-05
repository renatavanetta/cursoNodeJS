const express = require('express')
const exphbs = require('express-handlebars')
const mysql2 = require('mysql2')


const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
      extended: true,
    }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pages = req.body.pages

    const sqlInstruction = `INSERT INTO books (title, pages) VALUES ('${title}', ${pages})`

    connection.query(sqlInstruction, function(err) {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const sqlInstruction = "SELECT * FROM books"

    connection.query(sqlInstruction, function(err, data) {
        if(err){
            console.log(err)
            return
        }

        const books = data

        console.log(books)

        res.render('books', {books})
    })
})



const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

connection.connect(function (err){
    if(err){
        console.log(err)
    }

    console.log('Conexão com o banco de dados estabelecida com sucesso!')

    app.listen(3000)
})