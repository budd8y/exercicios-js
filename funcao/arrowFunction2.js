const timeFn = 1000;
function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);   
    }, timeFn);
}
new Pessoa();