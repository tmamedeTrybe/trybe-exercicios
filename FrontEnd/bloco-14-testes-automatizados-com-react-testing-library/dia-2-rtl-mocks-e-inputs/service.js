geraNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 101);
    return numeroAleatorio;
}

geraNumeroAleatorio();

caixaAlta = (string) => string.toUpperCase();

primeiraLetra = (string) => string[0];

concatStrings = (a, b) => a.concat(b);

const buscaCachorros = async () => {
    try {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
    } catch (error) {
      return error;
    }
  };

exibeCachorros = async () => {
    const container = document.querySelector('.container');
    const cachorros = await buscaCachorros();
    const imagem = document.createElement('img');
    imagem.src=cachorros.message;
    container.appendChild(imagem);
    
}
exibeCachorros();


export default service;