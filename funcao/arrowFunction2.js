const timeFn = 1000;
function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);   
    }, timeFn);
}
new Pessoa();

/**
 * Quando utilizamos arrow function, o this permanece no contexto
 * no qual foi definido. Isso faz com que não haja necessidade
 * de utilizar o bind. (lexux)
 */