const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: 'p1',
    message: 'Qual seu nome? '
},
{
    name: 'p2',
    message: 'Qual a sua idade? '
}]).then((answers) => {

    if(!answers.p1 || !answers.p2){
        throw new Error ('O nome ou idade não foram passados')
    }

    if(!Number(answers.p2)){
        throw new Error ('A idade não é um número')
    }

    console.log(chalk.bgYellow.black('Meu nome é ' + answers.p1 + ' e tenho ' + answers.p2 + ' anos.'))
}
).catch(error => {
    console.log(`${error}`)   
})