const os = require('os')
const chalk = require('chalk')

console.log(chalk.bgGray.black('CPUS'))
console.log(os.cpus())
console.log('\n')

console.log(chalk.bgGray.black('MEMORIA LIVRE'))
console.log(os.freemem() + ' mb')
console.log('\n')

console.log(chalk.bgGray.black('DIRETORIO PRINCIPAL'))
console.log(os.homedir())
console.log('\n')

console.log(chalk.bgGray.black('RELEASE'))
console.log(os.release())
console.log('\n')

console.log(chalk.bgGray.black('TIPO'))
console.log(os.type())
console.log('\n')
