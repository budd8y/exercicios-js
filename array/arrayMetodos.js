const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // add um elemento no ultimo indice
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // add um elemento no inicio
console.log(pilotos)

// splice pode tanto add como remover elementos
// add a partir do indice 2
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remove a partir do ind 3, 1 elemento
pilotos.splice(3, 1)
console.log(pilotos)

// slice retorna um novo array
// neste caso vai pegar do indice informado até o final
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// aqui estamos dizendo que ele ira criar um novo array
// a partir do indice um com 4 elementos.
// Porem, o array que esta servindo como parm, deve 
// ter a qtde de elementos que esperamos recuperar.
// Do contrario, o novo array tera apenas os indices
// que tinha no padrao
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
