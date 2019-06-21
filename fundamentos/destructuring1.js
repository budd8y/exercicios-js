// novo recurso do EC2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Tire de dentro do objeto o que eu solicar
// no caso o objeto será 'pessoa' e os atrubutos
// que queremos extrair deste objeto será 'nome' e 'idade'.
// A extração gerará variáveis de acondo com o nome dos atributos
const { nome, idade } = pessoa;
console.log(nome, idade);

// Para ter um variável com um nome diferente do atributo,
// basta passar o novo nome depois de dois pontos ':'
const { nome: novoNome, idade: novaIdade } = pessoa;
console.log(novoNome, novaIdade);

// Caso não saibamos se um atributo existe, quando tentarmos
// fazer a extração, podemos definir um valor default com
// o uso do '='.
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

// não será criada a variável para endereço,
// apenas logradouro e numero
const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero);