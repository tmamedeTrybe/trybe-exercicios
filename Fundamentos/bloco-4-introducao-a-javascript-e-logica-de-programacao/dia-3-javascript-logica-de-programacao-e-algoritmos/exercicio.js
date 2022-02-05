// Exercicio 01
/*let fatorial = 1;
for (let index = 10; index > 0; index -= 1){
    fatorial *= index;
    }
console.log(fatorial);*/

// Exercicio 02
/*let word = 'Thiago';
let inverso = '';
for (let index = word.length - 1; index >= 0; index -= 1){
    inverso += word[index];
}
console.log(inverso);*/

// Exercicio 03
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array [0];
for (let index = 0; index < array.length; index += 1){
    if (array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
}
for (let index = 0; index < array.length; index += 1){
    if (array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    }
}

console.log (maiorPalavra);
console.log (menorPalavra);
