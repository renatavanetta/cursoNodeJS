const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {
    const itens = ['item A', 'item B', 'item C']
    res.render('dashboard', {itens})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node',
        category: 'JavaScript',
        body: 'Este artigo lhe ajudará a aprender Node.js...',
        comments: 4
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node',
            category: 'JavaScript',
            body: 'teste',
            comments: 4
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'teste',
            comments: 6
        }
    ]

    res.render('blog', {posts})
})


app.get('/', (req, res) => {
    const user = {
        name: 'Renata',
        surname: 'Tobias'
    }

    const palavra = 'Teste'

    const auth = true

    res.render('home', {user: user, palavra, auth})
})

app.listen(3000, () => {
    console.log('app funcionando!')
})