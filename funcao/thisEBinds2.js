const timeFn = 1000;
function Pessoa() {
    this.idade = 0;

    setInterval(function() {
        this.idade++;
        console.log(this.idade);
        
    }.bind(this), timeFn);
}
new Pessoa();

function Pessoa2() {
    this.idade = 0;

    const self = this;
    setInterval(function() {
        self.idade++;
        console.log(self.idade);   
    }, timeFn);
}

new Pessoa2();