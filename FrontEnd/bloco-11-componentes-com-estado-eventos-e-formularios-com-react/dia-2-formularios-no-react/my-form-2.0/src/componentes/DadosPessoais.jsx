import React from 'react';
import Input from './Input';


class DadosPessoais extends React.Component {
    render() {
        const {nomeDigitado, emailDigitado, cpfDigitado, enderecoDigitado, casaDigitado, apartamentoDigitado, funcaoApp} = this.props
        return (
            <div>
            <fieldset>
                <legend>Dados Pessoais</legend>
                <form>
                <label>
                    Nome
                    <Input funcao={funcaoApp}  tipo='text' nome='nome' valor={nomeDigitado} tamanho={40} />
                </label>
                <label>
                    Email
                    <Input funcao={funcaoApp} tipo='text' nome='email' valor={emailDigitado} tamanho={50} />
                </label>
                <label>
                    CPF
                    <Input funcao={funcaoApp}  tipo='text' nome='cpf' valor={cpfDigitado} tamanho={11} />
                </label>
                <label>
                    Endereço
                    <Input funcao={funcaoApp}  tipo='text' nome='endereco' valor={enderecoDigitado} tamanho={200} />
                </label>
                <label htmlFor='cidade'>
                Casa
                    <Input funcao={funcaoApp}  tipo='radio' nome='cidade' valor={casaDigitado} />
                </label>
                <label htmlFor='cidade'>
                Apartamento
                    <Input funcao={funcaoApp}  tipo='radio' nome='apartamento' valor={apartamentoDigitado} />
                </label>
                </form>
            </fieldset>
            </div>
        )
    }
}

export default DadosPessoais;