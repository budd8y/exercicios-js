// let e const = escopo de bloco
// var escopo de função 
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring
const [c, o, ...tras] = 'Cod3r'
console.log(c, o, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)