const sum = require('./sum');

describe ('Testar função de soma', () => {
    it ('Verifica total da soma', () => {
        expect(9).toEqual(sum(5,4))
    })
    it ('Verifica retorno de 0', () => {
        expect(0).toEqual(sum(0,0))
    })
    it('Verifica se entradas são numeros', () => {
        expect(() => sum(4, '5')).toThrowError();
        
    })
   it ('Verifica mensagem de erro', () => {
       expect (() => sum(4, "5").toThrowError("parameters must be numbers"));
   })
})