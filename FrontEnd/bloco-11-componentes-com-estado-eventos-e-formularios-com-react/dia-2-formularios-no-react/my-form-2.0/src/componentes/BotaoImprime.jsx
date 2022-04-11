import React from 'react';

class BotaoImprime extends React.Component {
    render() {
        const {funcaoBotao, nomeBotao} = this.props
        return (
            <button 
            onClick={funcaoBotao}>
                {nomeBotao}</button>
        )
    }
}

export default BotaoImprime;