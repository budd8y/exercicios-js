function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
} 

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc  = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.20 };
// Para colocar o contexto para a função getPreco
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// 1º param é o objeto de contexto e o restante são os parms
// que a função espera
console.log(getPreco.call(carro, 0.17, '$'));
// a diferença para o apply é que os parms precisam
// ser passados por array
console.log(getPreco.apply(carro, [0.17, '#']));