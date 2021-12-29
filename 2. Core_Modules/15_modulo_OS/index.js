const os = require('os')
const chalk = require('chalk')

console.log(chalk.bgGray.black('CPUS'))
console.log(os.cpus(), "\n")

console.log(chalk.bgGray.black('MEMORIA LIVRE'))
console.log(os.freemem() + ' mb', "\n")

console.log(chalk.bgGray.black('DIRETORIO PRINCIPAL'))
console.log(os.homedir(), "\n")

console.log(chalk.bgGray.black('RELEASE'))
console.log(os.release(), "\n")

console.log(chalk.bgGray.black('TIPO'))
console.log(os.type(), "\n")
