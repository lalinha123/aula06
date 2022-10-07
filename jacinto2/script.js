const dia = Number(prompt('Digite o número do dia da semana'));
const arrDias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
let msg;

msg = !dia || dia > 7 || dia < 1n ? 'Valor inválido' : `Hoje é ${arrDias[dia - 1]}`;

document.write(`<h1>${msg}</h1>`);