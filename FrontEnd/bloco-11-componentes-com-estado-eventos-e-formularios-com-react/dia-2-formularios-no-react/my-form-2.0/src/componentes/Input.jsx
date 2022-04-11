import React from 'react';

class Input extends React.Component {

    render() {
        const {tipo, nome, valor, tamanho, funcao} = this.props;
        return (
            <input onChange={funcao} type={tipo} name={nome} value={valor} maxLength={tamanho}></input>
        )
    }
}
export default Input;