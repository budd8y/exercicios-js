// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2,3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = () => lexico1.bind({})
lexico1()
lexico2()

// params default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(undefined)
log(null)
log('Sou mais forte')

// operador rest (juntar todos os params passados)
// passamos os valores para a função de forma espalhada
// e ela retornou todos juntos
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))