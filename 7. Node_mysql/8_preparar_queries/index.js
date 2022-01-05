const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./dataBase/connection')


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

    const sqlInstruction = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = ['title', 'pages', title, pages]

    pool.query(sqlInstruction, data, function(err) {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const sqlInstruction = "SELECT * FROM books"

    pool.query(sqlInstruction, function(err, data) {
        if(err){
            console.log(err)
            return
        }

        const books = data

        console.log(books)

        res.render('books', {books})
    })
})

app.get('/books/:id', (req, res) => {
    const bookId = req.params.id
    const sqlInstruction = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', bookId]

    pool.query(sqlInstruction, data, function(err, data) {
        if(err){
            console.log(err)
            return
        }

        const book = data[0]

        res.render('book', {book})
    })
})

app.get('/books/edit/:id', (req, res) => {
    const bookId = req.params.id
    const sqlInstruction = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', bookId]

    pool.query(sqlInstruction, data, function(err, data) {
        if(err){
            console.log(err)
            return
        }

        const book = data[0]

        res.render('editbook', {book})
    })
})

app.post('/books/updatebook', (req, res) => {
    const bookId = req.body.id
    const title = req.body.title
    const pages = req.body.pages

    const sqlInstruction = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pages', pages, 'id', bookId]

    pool.query(sqlInstruction, data, function(err) {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.post('/books/remove/:id', (req, res) => {
    const bookId = req.params.id

    const sqlInstruction = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sqlInstruction, data, function(err) {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.listen(3000)
