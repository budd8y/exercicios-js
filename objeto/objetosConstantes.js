// pessoa aponta para um endereço de memória
// no endereço de memória é onde temos o objeto criado {...}
// pessoa -> #83902 -> {...}
const pessoa = { nome: 'Joao' };

// quando alteramos o nome, não estamos alterando o endereço
// para onde está apontando 'pessoa', mas sim o objeto
// que está neste endereço de memória. O que não podemos
// mudar é o endereço para onde 'pessoa' aponta.
pessoa.nome = 'Pedro';
console.log(pessoa);

// Agora se tentarmos atribuir um novo objeto para 'pessoa'
// isto é, alterar o endereço de memório( para apontar para
// o novo objeto)
// pessoa -> #123 -> {...}, aí sim vamos ter um erro
// pessoa = { nome: 'Ana' };

// Estamos congelando o objeto 'pessoa'
// Isto é, não conseguiremos alterar os atributos e métodos
// do objeto. Sendo assim, se tentarmos atribuir novos dados
// ao objeto 'pessoa' e printarmos isto, será mostrado
// os dados que foram atribuídos antes da nova atribuição
Object.freeze(pessoa);

pessoa.nome = 'Maria';
pessoa.endereco = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

// Criando um objeto constante
const pessoaConstante = Object.freeze({ nome: 'João' });
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);