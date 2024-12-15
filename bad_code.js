// bad_code.js -> Código mal feito para os erros serem listados
// Parametro não usado na função
function calculateArea(r) {
    //Variavel que não foi usada
    let radius = 10;

    let area = Math.PI * (10 ** 2);
    return area;
}

function main() {
    // Log não necessário de uma constante que não existe
    console.log(GLOBAL_CONSTANT);

    let result = calculateArea(5);
    // Log não necessário
    console.log(`The area is: ${result}`);

    //Variavel que não foi usada
    let unusedVar = 'this will trigger a lint warning';
}

main();