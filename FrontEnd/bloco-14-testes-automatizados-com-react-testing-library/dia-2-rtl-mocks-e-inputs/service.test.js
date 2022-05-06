import service, { geraNumeroAleatorio, caixaAlta,
    buscaCachorros } from './service';

describe ('Função que retorna um numero aleatorio', () => {
    it ('verifica se a função é chamada', () => {
        geraNumeroAleatorio = jest.fn()
        geraNumeroAleatorio();
        expect(geraNumeroAleatorio).toHaveBeenCalled;
        
    })
    it ('verifica retorno da função', () => {
        geraNumeroAleatorio = jest.fn().mockReturnValue(10);
        expect(geraNumeroAleatorio()).toBe(10);
    })
    it ('verifica se função foi chamada e quantas vezes, retorno da função, e os parametros ', () => {
        geraNumeroAleatorio = jest.fn().mockImplementation((a,b) => a / b);
        expect(geraNumeroAleatorio).toHaveBeenCalled;
        expect(geraNumeroAleatorio(10,5)).toBe(2);
        expect(geraNumeroAleatorio).toHaveBeenCalledTimes(1);
        expect(geraNumeroAleatorio).toHaveBeenCalledWith(10,5);
        
    })
    it ('verifica ... ', () => {
        geraNumeroAleatorio = jest.fn().mockImplementation((a,b,c) => a * b * c);
        expect(geraNumeroAleatorio).toHaveBeenCalled;
        expect(geraNumeroAleatorio(2,3,4)).toBe(24);
        expect(geraNumeroAleatorio(1,3,5)).toBe(15);
        expect(geraNumeroAleatorio).toHaveBeenCalledTimes(2);
        expect(geraNumeroAleatorio).toHaveBeenCalledWith(1,3,5);

        geraNumeroAleatorio.mockReset();
        geraNumeroAleatorio = jest.fn().mockImplementation((a) => a * 2);
        expect(geraNumeroAleatorio(2)).toBe(4);
        expect(geraNumeroAleatorio).toHaveBeenCalledTimes(1);
        expect(geraNumeroAleatorio).toHaveBeenCalledWith(2);
        
        
    })
    
})

describe("testando implementações", () => {
    it('verifica se funcao transforma string em caixa baixa', () => {
        const mockCaixaAlta = jest.spyOn(service, "caixaAlta" ).mockImplementation(string => string.toLowerCase());
        expect(mockCaixaAlta).toHaveBeenCalled;
        expect(mockCaixaAlta('THIAGO')).toBe('thiago');
        expect(mockCaixaAlta).toHaveBeenCalledTimes(1);
        expect(mockCaixaAlta).toHaveBeenCalledWith('THIAGO');
    })

    it('verifica se funcao retorna ultima letra', () => {
        const mockPrimeiraLetra = jest.spyOn(service, "primeiraLetra").mockImplementation(string => string[string.length - 1]);
        expect(mockPrimeiraLetra).toHaveBeenCalled;
        expect(mockPrimeiraLetra('THIAGO')).toBe('O');
        expect(mockPrimeiraLetra).toHaveBeenCalledTimes(1);
        expect(mockPrimeiraLetra).toHaveBeenCalledWith('THIAGO')
    })

    it('verifica se funcao concatena três strings', () => {
        const mockconcatStrings = jest.spyOn(service, 'concatStrings').mockImplementation((a, b, c) => a.concat(b, c));
        expect(mockconcatStrings).toHaveBeenCalled;
        expect(mockconcatStrings('Thiago', 'Mamede', 'Rodrigues')).toBe('ThiagoMamedeRodrigues');
        expect(mockconcatStrings).toHaveBeenCalledTimes(1);
        expect(mockconcatStrings).toHaveBeenCalledWith('Thiago', 'Mamede', 'Rodrigues')
    })

    it('Restaura funcao CaixaAlta e veirifica se retorna em caixa alta', () => {
        caixaAlta.mockRestore();
        expect(caixaAlta('thiago')).toBe('THIAGO')
    })

})

describe ('Testando a requisição', () => {
    const cachorro = {message: "https://images.dog.ceo/breeds/terrier-silky/n02097658_1013.jpg", status: "success"};
    global.buscaCachorros =  jest.fn().mockResolvedValue({
        json: jest.fn.mockResolvedValue({cachorro})
    })
})