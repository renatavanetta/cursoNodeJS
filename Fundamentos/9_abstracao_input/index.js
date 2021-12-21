const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: 'p1', 
    message: 'qual a primeira nota? '
}, 
{
    name: 'p2',
    message: 'qual a segunda nota? '
}]).then((answers) => {
    const media = parseInt(answers.p1) + parseInt(answers.p2) / 2;
    if (media >= 7){
        console.log(chalk.green('Parabéns! Você foi aprovado!'))
    }else{
        console.log(chalk.red('Infelizmente você não foi aprovado. Tente novamente!'))
    }
}).catch(err => console.log(err))