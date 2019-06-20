/**
 * um THIS numa função arrow é associado ao contexto no qual ele foi escrito. 
 * Não tem variação de forma alguma. Nem mesmo utilizando o bind!!!
 */




let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow(obj); // arrow function é mais forte, isto é, o bind não consiguirá mudar o contexto.