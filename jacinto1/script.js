const letra = prompt('Insira uma letra');
let msg;
const vogais = ['a', 'e', 'i', 'o', 'u'];

for (vogal of vogais) {
    if (letra === vogal) {
        msg = 'Vogal';
        break;
    }

    else {
        msg = 'Não é vogal';
    }
}

document.write(`<h1>${msg}</h1>`);