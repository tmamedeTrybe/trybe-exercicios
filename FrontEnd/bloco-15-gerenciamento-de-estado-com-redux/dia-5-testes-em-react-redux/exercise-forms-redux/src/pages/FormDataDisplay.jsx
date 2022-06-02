import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      curriculo,
      cargo,
      descricao,
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  nome: Proptypes.string.isRequired,
  email: Proptypes.string.isRequired,
  cpf: Proptypes.string.isRequired,
  endereco: Proptypes.string.isRequired,
  cidade: Proptypes.string.isRequired,
  estado: Proptypes.string.isRequired,
  curriculo: Proptypes.string.isRequired,
  cargo: Proptypes.string.isRequired,
  descricao: Proptypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  nome: state.personalReducer.personalForm.nome,
  email: state.personalReducer.personalForm.email,
  cpf: state.personalReducer.personalForm.cpf,
  endereco: state.personalReducer.personalForm.endereco,
  cidade: state.personalReducer.personalForm.cidade,
  estado: state.personalReducer.personalForm.estado,
  curriculo: state.professionalReducer.professionalForm.curriculo,
  cargo: state.professionalReducer.professionalForm.cargo,
  descricao: state.professionalReducer.professionalForm.descricao,
});

export default connect(mapStateToProps)(FormDataDisplay);
