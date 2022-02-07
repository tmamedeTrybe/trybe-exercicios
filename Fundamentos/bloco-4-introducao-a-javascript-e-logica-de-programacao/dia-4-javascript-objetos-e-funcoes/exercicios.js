/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  // Exercicio 01
  console.log ('Bem vinda, ' + info.personagem);

  // Exercicio 02
  info['Recorrente'] = 'Sim';
  console.log(info);

  // Exercicio 03
  for (let key in info){
      console.log(key);
  }

  // Exercicio 04
  for (let key in info){
      console.log(info[key]);
  }

  // Exercicio 05
  let infoTio = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    Recorrente: 'Sim',
  }

  for (let key in info, infoTio){
      if(info[key] === infoTio[key]){
          console.log('Ambos recorrentes');
      } else{
      console.log(info[key] + ' e ' + infoTio[key]);
    }
  }
  

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo:'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }]
    
  }
// Exercicio 06
  console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama ' + leitor.livrosFavoritos[0].titulo + ' .');

  // Exercicio 07
 leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  })

  console.log (leitor);
    
 // Exercicio 08

 console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");
*/

//Exercicio 08

/*let word = 'thiago';
let splitWord = word.split('');
console.log(splitWord);
let reverseWord = splitWord.reverse();
console.log(reverseWord);
let joinWord = reverseWord.join('');
console.log(joinWord);
console.log(word);
console.log(word === joinWord);*/


function verificaPalindromo (palavra){
    let palavraReversa = '';
   for (let index = palavra.length - 1; index >= 0; index -= 1){
         palavraReversa += palavra[index];
    }
    if (palavraReversa === palavra){
        return 'true';
    } else{ 
    return 'false';} 
}
console.log(verificaPalindromo('amam'));

// Exercicio 9

function retorneIndiceMaiorValor(array){
    let maiorValor = [0];
    for (let index = 0; index < array.length; index += 1){
        if (array[index] > maiorValor){
            maiorValor = array[index];
        }
        
    }
    return array.indexOf(maiorValor);
}
console.log(retorneIndiceMaiorValor([210, 450, 6, 80, 10, 1001]));

// Exercicio 10


function retorneIndiceMenorValor(array){
    let menorValor = [0];
    for (let index = 0; index < array.length; index += 1){
        if (array[index] < menorValor){
            menorValor = array[index];
        }
        
    }
    return array.indexOf(menorValor);
}
console.log(retorneIndiceMenorValor([2, 4, 6, 7, 10, 0, -3]));


