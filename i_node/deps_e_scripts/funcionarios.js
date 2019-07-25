// no package.json temos o nodemon que não é dependência.
// Porém ele está sendo chamado globalmente. Para que isso dê certo
// temos que ter instalado o nodemon globalmente (jênio kkkkk)
// npm i -g nodemon
// ou instalar o nodemon sem salvar no package.json, isto é, npm i nodemon

// para rodar o dev que foi definido dentro do package.json, temos
// que rodar: npm run dev

const url   = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    const chineses = f => f.pais === 'China'
    const mulheres = f => f.genero === 'F'
    const menorSalario = (func, funcAtual) =>  {
        return func.salario > funcAtual.salario ? func : funcAtual
    }

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
    // mulher chinesa com menor salario
})
