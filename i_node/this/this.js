// 'this' fora de uma função sempre aponta para 'module.exports'
// 'this' dentro de uma função sempre aponta para 'global'

console.log(this === global) // false
console.log(this === module) // false
console.log(this === module.exports) // true
console.log(this === exports) // true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...' // temos que está atentos porque neste caso o atributo criado está apontando para global
}


this.perigo = '...' // aqui já está apontando para module.exports
logThis() // false