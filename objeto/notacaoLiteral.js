const a = 1;
const b = 2;
const c = 3;

// Antes do ECMAScript 6
const obj1 = { a: a, b: b, c: c };

// ECMAScript 6
// Atribui o nome da variável ao nome do atruibuto
const obj2 = { a, b, c };

console.log(obj1, obj2);

const nomeAttr = 'nota';
const valorAttr = 7.87;
const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4);

const obj5 = {
    // Antes ECS6
    funcao1: function() {
        // ...
    },
    // ECS6
    funcao2() {
        // ...
    }
};
console.log(obj5);