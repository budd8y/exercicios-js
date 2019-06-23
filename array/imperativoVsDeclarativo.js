const alunos = [
    { nome: 'Joao', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
// Aqui o como fazer é mais importante, isto é, o passo a passo de como fazer
// Ex: um pai pede para o filho arrumar a mesa do jantar ->
// Imperativamente, ele irá dizer ao filho como arrumar, isto é,.
// pegue a toalha de mesa e a forre, pegue os pratos e coloque em tal posição
// pegue os talheres e coloque no lado dos pratos.. (detalhadamente)
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo (mais interessante, pq criamos funcoes que podem ser reusadas)
// Importa mais dizer o que precisa ser feito e não como deve ser feito

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)