function a() {
    console.log('Executando a()')
}

function b() {
    console.log('Executando b()')
}

function c() {
    console.log('Executando c()')
    console.log('Excutando a() dentro de c(): ')
    a()
    console.log('Excutando b() dentro de c(): ')
    b()
}

c()

