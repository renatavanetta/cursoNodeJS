const path = require('path')
const chalk = require('chalk')

//path absoluto
console.log(chalk.bgGray.black('Path absoluto:'))
console.log(path.resolve('teste.txt' + '\n'))

//formar path
const midFolder = 'relatorios'
const fileName = 'renata.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)
console.log(chalk.bgGray.black('Fomando um path:'))
console.log(finalPath)

