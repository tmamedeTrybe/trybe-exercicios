let nome = document.querySelector('#user-name');
let email = document.querySelector('#user-email');
let textarea = document.querySelector('#textarea');

if(nome.value.length < 10 || nome.value.length > 50){
    alert('Dados Invalidos');
} if (email.value.length < 10 || email.value.length > 50){
    alert('Dados Inválidos!');
} 

