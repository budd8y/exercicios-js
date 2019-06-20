
// function declaration
// A diferença entre está declaração e function expression
// é que está podemos chamá-la antes da sua execução. Isso
// pq o interpretador do javascript primeiro vai carregar 
// todas as FUNÇÕES DECLARATIVAS do arquivo e depois vai executar o código
console.log(soma(3, 4));

function soma(x, y) {
    return x + y;
}

// function expression
// Como a função está sendo atribuída a uma variável,
// só será carregada quando estiver na linha onde foi atribuída,
// diferentemente das FUNÇÕES DECLARATIVAS
const sub = function (x, y) {
    return x - y;
}
console.log(sub(3,4));

// named function expression
// Aqui só é vantajoso para debug, pois irá aparecer o nome
// da função e não apenas uma função anônima.
// Lembrando que está é uma forma pouco usada
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3,4));