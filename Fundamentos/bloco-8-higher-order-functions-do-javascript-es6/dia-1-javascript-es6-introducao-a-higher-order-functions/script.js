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

const verificaAcerto = (numeroApostado) => {
    let numeroSorteado = Math.floor(Math.random() * 60 + 1);
    console.log(numeroSorteado);
    if (numeroApostado === numeroSorteado) {
    return true
    } return false;
};

const resultadoSorteio = (callback, numeroApostado) =>{
    if ( callback(numeroApostado) === true){
        return "Parabens!!!";
    } return "Tente novamente.";
}

console.log(resultadoSorteio(verificaAcerto, 18));








        


