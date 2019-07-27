// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação literal
const nome = 'Carla'
// antes
const pessoaA = {
    nome: nome,
    ola: function() {
        return 'Oi gente!'
    }
}
// depois
const pessoaB = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoaA.nome, pessoaA.ola())
console.log(pessoaB.nome, pessoaB.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())