// Factory é uma função que devolve um objeto
// Ou seja, uma fabrica de objetos

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());