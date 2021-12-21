const chalk = require('chalk')

module.exports = {
    verificaNota(a) {
        if (a >= 7) {
            console.log(chalk.green("Parabéns! Você está aprovado com nota " + a + "."))
        }else{
            console.log(chalk.bgRed.black("Infelizmente você não foi aprovado. Tente novamente!"))
        }
    }
}