const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();

/**
 * const falar = pessoa.falar;
 * falar() // conflito entre paradigmas: funcional e OO
 * 
 * Este código irá gerar um 'undefined'. Isso pq quando atribuimos
 * o atributo falar a variável de mesmo nome, não existe o contexto
 * do atributo saudacao, que faz parte do objeto pessoa. Para resolver
 * este problema, nós utilizamos o bind (amarra o contexto do objeto
 * que foi passado como param) passando o objeto:
 */

 const falarDePessoa = pessoa.falar.bind(pessoa);
 falarDePessoa();