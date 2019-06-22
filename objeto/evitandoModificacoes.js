// Object.preventExtensions
// Não consegue adicionar mais atributos, 
// porém pode excluir atributos existentes
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});

// validar se pode add mais atributos
console.log('Extensivel: ', Object.isExtensible(produto));

// Vai permitir alterar os atributos,
// mas add novos
produto.nome = 'Borracha'; // permitido
produto.descricao = 'Borracha escolar branca'; // não permitido
delete produto.tag; // permitido
console.log(produto);

// Object.seal(selar)
// Não é possível add novos atributos,
// nem deletar os atributos existentes,
// mas é possível alterar os atributos existentes
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa);

// validando se o objeto está selado
console.log('Selado: ', Object.isSealed());
pessoa.sobrenome = 'Silva'; // não permitido
delete pessoa.nome; // não permitido
pessoa.idade = 29; // permitido
console.log(pessoa);

// Object.freeze = selado + valores constantes