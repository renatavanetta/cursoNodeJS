const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
    {
        id: 1,
        title: 'Fogão',
        category: 'Eletrodomésticos',
        price: '1000',
        color: 'azul',
        description: 'fogão novo', 
    },
    {
        id: 2,
        title: 'Geladeira',
        category: 'Eletrodomésticos',
        price: '3500', 
        color: 'azul',
        description: 'geladeira usada e bem conservada', 
    },
    {
        id: 3,
        title: 'Microondas',
        category: 'Eletrodomésticos',
        price: '500', 
        color: 'branco',
        description: 'microondas com lâmpada queimada, mas funcionando perfeitamente', 
    },
    {
        id: 4,
        title: 'Batedeira',
        category: 'Eletroportáteis',
        price: '1200', 
        color: 'preto',
        description: 'batedeira da marca "bolinho Bom". Potente e novinha!', 
    },
]

app.get('/detalhes/:id', (req, res) => {
    const product = products[(req.params.id) -1]
    res.render('detalhes', {product})
})

app.get('/', (req, res) => {

    res.render('home', {products})
})

app.listen(3000, () => {
    console.log('app funcionando!')
})