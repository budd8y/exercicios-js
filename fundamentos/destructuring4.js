function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] /*destructuring*/ = [max, min] /*aqui estamos criando o array com as variáveis recebidas no destructuring */;

    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);// Para arredondar para baixo
    // Para arrendodar para cima seria o 'ceil'
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([]));
console.log(rand([100,10]));