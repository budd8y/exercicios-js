// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2,3);
/**
 * mesmo uma função tendo vários parâmetros, podemos omiti-los.
 * No nosso exemplo, a função possui dois parms, porém, se passarmos apenas 1,
 * o outro valor esperado será undefined, ou seja, como trata-se de uma soma
 * o valor passado será somado com undefined retornando NaN (Not a Number)
 */
imprimirSoma(2);
imprimirSoma();
/**
 * também podemos passar mais valores do que a função espera, porém a função
 * irá pegar os valores que precisa e desconsiderar o resto e não dará erro.
 */
imprimirSoma(2,3,4,5,6);

// função com retorno
// atribuir valor na definição dos parms da função vem do ECS2015
function soma(a, b = 0) {
    return a + b;
}
console.log(soma(2,3));
console.log(soma(2));



