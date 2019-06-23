const moduloA = require('../../../basico-modulos/moduloA')
console.log(moduloA.bemVindo);

const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia');
    res.end();
}).listen(8080);