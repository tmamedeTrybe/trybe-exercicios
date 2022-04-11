import React from 'react';

class Textarea extends React.Component{
    
    render() {
        const {nome, tamanho, funcao, valor} = this.props;
        return (
            <textarea onChange={funcao}  value={valor} name={nome} maxLength={tamanho} />
        )
    }
}

export default Textarea;