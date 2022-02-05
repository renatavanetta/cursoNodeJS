const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const connection = require('./database/connection')

const Task = require('./models/Task')
const taskRouters = require('./routes/taskRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', taskRouters)

connection.sync()
.then(() => {
    app.listen(3000)
})
.catch((error) => {
    console.log('Ocorreu um erro na conexão: ' + error)
})