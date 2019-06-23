console.log(module.exports === this);
console.log(module.exports === exports);


this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports);

// Mesmo existindo outras maneiras de exportar os módulos
// quem é retornado é sempre o module.exports
