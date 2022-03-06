const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
materia: 'História',
numeroEstudantes: 20,
professor: 'Carlos',
};

const lesson3 = {
materia: 'Matemática',
numeroEstudantes: 10,
professor: 'Maria Clara',
turno: 'noite',
};

// const adicionaNoturno = (objeto, chave, valor) => {
//     objeto[chave] = valor;
//     return objeto;   
// }
// console.log(adicionaNoturno(lesson2, 'turno', 'noturno'));

// const listaChaves = (objeto) => Object.keys(objeto);
// console.log(listaChaves(lesson3));

// const tamanhoObjeto = (objeto) => Object.keys(objeto).length;
// console.log(tamanhoObjeto(lesson3));

// const valoresObjeto = (objeto) => Object.values(objeto);
// console.log(valoresObjeto(lesson1));


const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.table(allLessons);

// const totalEstudantes = () => {
//     const estudantesLesson1 = allLessons.lesson1.numeroEstudantes;
//     const estudantesLesson2 = allLessons.lesson2.numeroEstudantes;
//     const estudantesLesson3 = allLessons.lesson3.numeroEstudantes;
//     let total = estudantesLesson1 + estudantesLesson2 + estudantesLesson3;
//     return total
// }

// console.log(totalEstudantes());



const obterValorChave = (objeto, numero) => Object.values(objeto)[numero];

console.log(obterValorChave(lesson1, 0));