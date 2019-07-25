const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// quando colocamos o () depois do require, estamos retornando um objeto deste modulo
// ou seja, estamos retornando uma função factory
const contadorC = require('./instanciaNova')() 
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
// vai retornar os incrementos do contadorA porque o node faz cache
console.log(contadorA.valor, contadorB.valor) // 3

contadorC.inc()
contadorC.inc()
// aqui o contadorD não irá pegar o incremento do contadorC devido a factory
console.log(contadorC.valor, contadorD.valor) 
