import React from 'react';
import Textarea from './Textarea';


class UltimoEmprego extends React.Component {
    render () {
        const {funcaoApp, curriculoDigitado, cargoDigitado, descricaoDigitado  } = this.props
        return(
            <fieldset>
                <legend> Último emprego</legend>
                <label htmlFor='curriculo'>
                    Resumo do Currículo
                    <Textarea funcao={funcaoApp} valor={curriculoDigitado} nome='curriculo' tamanho='1000'  />
                </label>
                <label htmlFor='cargo'>
                    Cargo
                    <Textarea funcao={funcaoApp} valor={cargoDigitado} nome='cargo' tamanho='40' />
                </label>
                <label htmlFor='descricao'>
                    Descrição do cargo
                    <Textarea funcao={funcaoApp} valor={descricaoDigitado} nome='descricao' tamanho='1000' />
                </label>
            </fieldset>
        )
    }
}

export default UltimoEmprego;