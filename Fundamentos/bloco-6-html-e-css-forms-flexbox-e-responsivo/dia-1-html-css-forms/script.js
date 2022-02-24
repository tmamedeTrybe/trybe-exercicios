let nome = document.querySelector('#user-name');
let email = document.querySelector('#user-email');
let textarea = document.querySelector('#textarea');
let botaoEnviar = document.querySelector('#button-enviar');
let autorizo = document.querySelector('#check-uso-imagens');

function habilitarBotaoEnviar(){
    botaoEnviar.disabled = !autorizo.checked;
}

function verificaLength(){ 
if(nome.value.length < 10 || nome.value.length > 40 || email.value.length < 10 || email.value.length > 50 || textarea.value.length > 500){
    alert('Dados Invalidos!');
} else{
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
}
}
import JustValidate from 'just-validate';
const validate = new JustValidate('#form');
const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);

window.onload = function(){
botaoEnviar.addEventListener('click', verificaLength);
autorizo.addEventListener('change', habilitarBotaoEnviar)

}
