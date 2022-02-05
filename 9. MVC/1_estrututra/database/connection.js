const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('MySQL conectado!')
} catch (error) {
    console.log('Não foi possível conectar: ' + error)
}

module.exports = sequelize
