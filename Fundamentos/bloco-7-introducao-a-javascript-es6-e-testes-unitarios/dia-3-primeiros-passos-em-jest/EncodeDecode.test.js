const {encode, decode} = require('./EncodeDecode');

describe('Testa funções encode e decode', ()=>{
    it ('Verifica se enconde é função', () =>{
        expect(typeof encode).toBe('function')
    })
    it ('Verifica se decode é função', () =>{
        expect(typeof decode).toBe('function')
    })
    it ('Verifica se aeiou é convertido em 12345', ()=>{
        expect (encode('aeiou')).toBe('12345')
    })
    it ('Verifica se 12345 é convertido em aeiou', ()=>{
        expect (decode('12345')).toBe('aeiou')
    })

    it ('Verifica se bcdf nãe é convertido em 12345', ()=>{
        expect (encode('bcdf')).toBe('bcdf')
    })
    it ('Verifica se tamanho da string permanece o mesmo', ()=>{
        expect (encode('aeiou').length).toEqual(5)
    })
})