const fs = require('fs')

if (!fs.existsSync('./minhapasta')){
    console.log('Esta pasta não existe. Criando pasta...')
    fs.mkdirSync('minhapasta')
} else {
    console.log('Esta pasta já existe.')
}

