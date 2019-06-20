// IIEF -> Immediately Invoked Function Expression
// Função auto invocada, isto é, a função já invocada na sua
// criação.

(function() {
    //Tudo que for criado aqui estará fora do escopo global
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})()