const valor = 'Global';

// Em javascript, a função, além dos atributos internos,
// ela tem noção do contexto no qual ela foi declarada
function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

/**
 * o resultado será 'Glogal'. Isso porque a função, 
 * apesar de onde foi chamada, ela irá sempre recuperar
 * o contexto mais abrangente onde foi definida.
 */
exec();