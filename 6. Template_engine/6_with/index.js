const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

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