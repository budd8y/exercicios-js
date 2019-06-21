const sequencia = {
    // Não impede o acesso ao atributo, porém é uma convensão
    _valor: 1, 

    get valor() {
        return this._valor++;
    },

    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    }
}

// Se chamamos algum método sem passar valores,
// ele entende que estamos chamando o método get.
// Se passarmos algum valor, ele entenderá que estamos
// chamando o método set
console.log(sequencia.valor, sequencia.valor);

sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900; // Não vai atribuir este valor
console.log(sequencia.valor, sequencia.valor);