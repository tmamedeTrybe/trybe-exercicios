let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*console.log(numbers);
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index])};*/

let soma = 0;
for (let index = 0; index < numbers.length; index +=1){
    soma = (numbers[index] + soma);
    
}
console.log(soma);

let media = soma / numbers.length;
console.log (media);
if (media > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}

