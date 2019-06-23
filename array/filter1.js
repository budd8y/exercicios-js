const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(p => p.preco > 1000))
console.log(produtos.filter(p => p.fragil === false))
console.log(produtos.filter(p => p.preco < 1000))

const produtoCaro = p => p.preco > 500
const produtoFragil = p => p.fragil

console.log(produtos.filter(produtoCaro).filter(produtoFragil))