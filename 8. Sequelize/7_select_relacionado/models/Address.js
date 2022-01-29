const { DataTypes } = require('sequelize')
const dataBase = require('../dataBase/connection')
const User = require('./User')

const Address = dataBase.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    },
})

User.hasMany(Address)
Address.belongsTo(User)

module.exports = Address