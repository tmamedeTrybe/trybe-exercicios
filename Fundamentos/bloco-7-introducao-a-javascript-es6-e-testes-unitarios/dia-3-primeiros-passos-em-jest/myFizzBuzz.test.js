const myFizzBuzz = require('./myFizzBuzz');

describe ('Verifica função FizzBuzz', () =>{
    it ('Verifica resultado com parametro 15', () =>{
        expect (myFizzBuzz(15)).toEqual('fizzbuzz');
    })
    it ('Verifica resultado com parametro 9', () =>{
        expect (myFizzBuzz(9)).toEqual('fizz');
    })
    it ('Verifica resultado com parametro 10', () =>{
        expect (myFizzBuzz(10)).toEqual('buzz');
    })
    it ('Verifica resultado com parametro não divisel por 3 e 5', () =>{
        expect (myFizzBuzz(17)).toEqual(17);
    })
    it ('Verifica resultado com parametro inválido', () =>{
        expect (myFizzBuzz('a')).toEqual(false);
    })
    
})