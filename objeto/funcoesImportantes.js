const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
});
console.log('----------------------');
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // será exibido no keys
    writable: false, // não deixa ser alterado (tipo um freeze)
    value: '01/01/2019'
});

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// EC6
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
Object.freeze(obj);
obj.c = 1234;
console.log(obj);