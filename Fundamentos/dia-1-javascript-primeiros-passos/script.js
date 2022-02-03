/*const a = 20;
const b = 10;
let soma = a + b;
console.log(soma);
let subtracao = a - b;
console.log (subtracao);
let multiplicacao = a * b;
console.log (multiplicacao);
let divisao = a / b;
console.log (divisao);
let modulo = a % b;
console.log (modulo);*/

/*const numb1 = 1;
const numb2 = 2;
if (numb1>numb2){
    console.log (numb1);
} else {
    console.log(numb2);
}*/

/*const numb3 = 10;
const numb4 = 20;
const numb5 = 30;
if (numb3 > numb4 && numb3 > numb5){
    console.log(numb3);
} else if (numb4 > numb3 && numb4 > numb5){
    console.log (numb4);
} else {
    console.log (numb5);
}*/

/*const numero = 6;
if (numero < 0){
    console.log ('Negative')
} else {
    console.log ('Positive')
}*/

/*const angulo01 = 30;
const angulo02 = 60;
const angulo03 = 90;
if (angulo01 + angulo02 + angulo03 == 180) {
    console.log ("true");
} else if (angulo01 < 0 || angulo02 < 0 || angulo03 < 0) {
    console.log ("Error")
}*/

let peca = 'RAINHA';
peca = (peca.toLowerCase());
switch (peca){
    case 'bispo':
        console.log('diagonal');
        break;
    case 'rainha':
        console.log('paralela');
        break;
    case 'cavalo':
        console.log('todas direções');
        break;
    default:
        console.log ('Mensagem de erro');
}




