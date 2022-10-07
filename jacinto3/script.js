const num = Number(prompt('Digite um número'));

const tipo = num % 2 == 0 ? 'par' : 'ímpar';

document.write(`<h1>O número é ${tipo}</h1>`);