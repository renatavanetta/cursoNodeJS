const x = '10'

try {
    x = 2 //impossivel pois não podemos mudar o valor de uma constante.
} catch (error) {
    console.log(`Erro: ${error}`)
}

console.log('Continuando o código...')