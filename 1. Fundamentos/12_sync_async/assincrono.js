const fs = require('fs')

console.log('Inicio')

fs.writeFile("arquivo2.txt", "olá", function(err) {
    setTimeout(function() {
        console.log('Aquivo criado!')
    }, 1000)
})

console.log("Fim")

