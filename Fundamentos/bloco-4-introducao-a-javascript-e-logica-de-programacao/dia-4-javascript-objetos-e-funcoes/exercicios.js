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
  */

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


