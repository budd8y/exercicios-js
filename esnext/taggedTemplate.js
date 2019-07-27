// tagged template - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
// Aqui estamos usando o template string junto com a função tag
console.log(tag `${aluno} está ${situacao}.`)
