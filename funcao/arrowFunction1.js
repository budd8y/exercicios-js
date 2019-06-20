// arrow sempre é uma função anônima. Caso queira chamá-la
// depois, é necessário armazenar em uma variável
let dobro = function(a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

// quando temos apenas um param, não precisamos das chaves {}
dobro = a =>  2 * a; // retorno implícito.
console.log(dobro(Math.PI));

ola = () => 'Olá!';
ola = _ => 'Olá!'; // o underscore é um param. Porém se chamarmos
// a função sem parms, terá o mesmo resultado
console.log(ola());
