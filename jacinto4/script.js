const base = prompt('Insira a base');
const exp = prompt('Insira o expoente');
let potencia = base;

for (i = 1; i < exp; i++) {
    potencia += ` * ${base}`;
}

const resultado = eval(potencia);
document.write(`<h1>O resultado é: ${resultado}</h1>`);