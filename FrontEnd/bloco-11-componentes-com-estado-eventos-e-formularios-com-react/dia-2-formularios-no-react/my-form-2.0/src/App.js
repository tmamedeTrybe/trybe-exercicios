import React from 'react';
import BotaoImprime from './componentes/BotaoImprime';
import DadosPessoais from './componentes/DadosPessoais';
import UltimoEmprego from './componentes/UltimoEmprego';



class App extends React.Component {
  constructor() {
    super()
    this.coletaDados = this.coletaDados.bind(this);
    this.enviarFormulario = this.enviarFormulario.bind(this);
    this.apagarFormulario = this.apagarFormulario.bind(this);
    this.state = {
        nome: '',
        email: '',
        cpf: '',
        endereco:'',
        casa: '',
        apartamento: '',
        curriculo: '',
        cargo: '',
        descricao: '',
        submetido: false,
        apagar: false
    }
}

enviarFormulario() {
  this.setState({submetido: true})
}

apagarFormulario() {
  this.setState({apagar: true})
}

coletaDados({target}) {
  const {name, value} = target;
  this.setState(
      {[name]: value}
  ) 
}

render() {
  return (
    <div>
        <DadosPessoais funcaoApp={this.coletaDados} nomeDigitado={this.state.nome.toUpperCase()} emailDigitado={this.state.email} cpfDigitado={this.state.cpf}
          enderecoDigitado={this.state.endereco.replace(/[^\w\s]/gi, '')} casaDigitado={this.state.casa} apartamentoDigitado={this.state.apartamento}  />
        <UltimoEmprego funcaoApp={this.coletaDados} curriculoDigitado={this.state.curriculo} cargoDigitado={this.state.cargo}
          descricaoDigitado={this.state.descricao} />

    <div>
    <BotaoImprime funcaoBotao={this.enviarFormulario} nomeBotao= "Imprimir" />
    <BotaoImprime funcaoBotao={this.apagarFormulario} nomeBotao= "Apagar" />
    </div>

    {this.state.submetido ? 
      <div>
          <p> Nome: {`${this.state.nome.toUpperCase()}`} </p>
          <p> email: {`${this.state.email}`} </p>
          <p> cpf: {`${this.state.cpf}`} </p>
          <p> endereco: {`${this.state.endereco.replace(/[^\w\s]/gi, '')}`} </p>
          <p> casa: {`${this.state.casa}`} </p>
          <p> apartamento: {`${this.state.apartamento}`} </p>
          <p> curriculo: {`${this.state.curriculo}`} </p>
          <p> cargo: {`${this.state.cargo}`} </p>
          <p> descricao: {`${this.state.descricao}`} </p>
      </div> : null}

      {this.state.apagar ? this.setState(
        {nome: '',
        email: '',
        cpf: '',
        endereco:'',
        casa: '',
        apartamento: '',
        curriculo: '',
        cargo: '',
        descricao: '',
        submetido: false,
        apagar: false}
      ): null}

    </div>
  );
}
}

export default App;
