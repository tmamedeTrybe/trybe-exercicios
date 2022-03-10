
function encode(string) {
    let soletra = string.split('');
    for(let index = 0; index < soletra.length; index += 1){
      if (soletra[index] === 'a'){
        soletra[index] = '1';
      } else if (soletra[index] === 'e'){
        soletra[index] = '2';
      } else if (soletra[index] === 'i'){
        soletra[index] = '3';
      }  else if (soletra[index] === 'o'){
      soletra[index] = '4';
      }  else if (soletra[index] === 'u'){
      soletra[index] = '5';
      }
    } 
    return soletra.join('')
  }

  console.log(encode('thiago'));
  
  
  function decode(string) {
    let soletra = string.split('');
    for(let index = 0; index < soletra.length; index += 1){
      if (soletra[index] === '1'){
        soletra[index] = 'a';
      } else if (soletra[index] === '2'){
        soletra[index] = 'e';
      } else if (soletra[index] === '3'){
        soletra[index] = 'i';
      }  else if (soletra[index] === '4'){
      soletra[index] = 'o';
      }  else if (soletra[index] === '5'){
      soletra[index] = 'u';
      }
    } 
    return soletra.join('')
  }

  module.exports = {encode, decode};