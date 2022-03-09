// Exercicio 01

// const newEmployees = (novoContratado) => {
//     const employees = {
//       id1: novoContratado('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: novoContratado('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: novoContratado('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

// novoContratado = (nomeCompleto) => {
//     const email = nomeCompleto.toLowerCase().split(' ').join('_');
//     return {nomeCompleto, email: `${email}@betrybe.com`};
// }

// console.log(newEmployees(novoContratado));

// Exercicio 02

// const verificaAcerto = (numeroApostado) => {
//     let numeroSorteado = Math.floor(Math.random() * 60 + 1);
//     console.log(numeroSorteado);
//     if (numeroApostado === numeroSorteado) {
//     return true
//     } return false;
// };

// const resultadoSorteio = (callback, numeroApostado) =>{
//     if ( callback(numeroApostado) === true){
//         return "Parabens!!!";
//     } return "Tente novamente.";
// }

// console.log(resultadoSorteio(verificaAcerto, 18));

//Exercicio 03

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontuacaoEstudante = (callback, respostasCertas, gabarito) => {
    let pontuacaoEstudante = 0;
    for (let index = 0; index < respostasCertas.length; index += 1){
        let resposta = callback(respostasCertas[index], gabarito[index]);
        pontuacaoEstudante += resposta;
    }
    return pontuacaoEstudante;

}

const checaRespostas = (respostaCertas, gabarito) => {
    if(respostaCertas === gabarito){
        return 1
    } else if (gabarito === 'N.A'){
        return 0
    } else { return -0.5 }

}

console.log(pontuacaoEstudante(checaRespostas, RIGHT_ANSWERS, STUDENT_ANSWERS));







        


