// o Node procura por padrão no seu repositório.
// Se não encontrar, busca dentro da pasta node_modules
const fs = require('fs')

const caminho = __dirname + '/arquivo.json';

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// não precisamos fs para arquivos json
const config = require('./arquivo.json')
console.log(config.db)

// leitura de pastas
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})