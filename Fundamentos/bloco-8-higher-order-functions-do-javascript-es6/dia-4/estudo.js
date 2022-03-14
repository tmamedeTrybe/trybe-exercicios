const letras = ['a', 'c', 'b', 'e', 'f'];
const numeros = [1, 2, 3, 4, 5]

const soma = (array) => array.reduce((result, item) => {
    console.log(result);
   return  result + item;
} );

console.log(soma(letras));
console.log(soma(numeros));