// Exercicio 01
let fatorial = 1;
for (let index = 10; index > 0; index -= 1){
    fatorial *= index;
    }
console.log(fatorial);

// Exercicio 02
let word = 'tryber';
let inverso = '';
for (let index = 5; index <= word.length; index -= 1){
    word.push(index);
}
console.log(inverso)
