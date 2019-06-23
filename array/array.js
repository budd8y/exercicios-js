// Array em JS é um objeto que organiza sua estrutura
// através de índices

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo' // usado para substituicao de indice
aprovados.push('Abia') // usando para add mais indices
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // orderna 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Paulo', 'Ana']
aprovados.splice(1, 1)
// parm1 - é o indice
// parm2 - qtde de exclusoes a partir do indice
// outros parms - sao os q serao incluidos no array
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)
