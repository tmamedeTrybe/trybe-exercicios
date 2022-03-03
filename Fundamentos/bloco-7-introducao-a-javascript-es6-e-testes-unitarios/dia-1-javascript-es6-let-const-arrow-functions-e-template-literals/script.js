
//PARTE I
//Exercicio 01
const testingScope = (escopo) => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? `);
  }
  testingScope(true);

// Exercício 02

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const retornaArrayCrescente = (array) => array.sort((a,b) => a -b);
console.log(`"Os números ${retornaArrayCrescente(oddsAndEvens)} se encontram ordenados de forma crescente!"`)

// PARTE II
// Exercício 01

function fatorial(number){
    let fatorialNumber = 1;
    for (let index = 1; index <= number; index += 1){
        fatorialNumber *= index;
    }
    return fatorialNumber;
   
}
console.log(fatorial(5));

// Exercicio 02

const retornaMaiorPalavra = (frase) => {
    let fraseArray =  frase.split(" ");
    let maiorPalavra = fraseArray[0];
    for (let index = 0; index < fraseArray.length; index += 1){
        if (fraseArray[index].length > maiorPalavra.length) {
            maiorPalavra = fraseArray[index]}
    }
    return maiorPalavra;
    
}

console.log(retornaMaiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'))

