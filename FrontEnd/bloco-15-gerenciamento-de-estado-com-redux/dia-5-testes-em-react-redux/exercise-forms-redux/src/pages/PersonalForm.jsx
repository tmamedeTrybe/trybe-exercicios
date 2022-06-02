import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { submitPersonalInfo } from '../redux/actions/action';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      complete: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { submitInfo } = this.props;
    submitInfo(this.state);
    this.setState({ complete: true });
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado, complete } = this.state;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <fieldset>
        <Input
          label="nome: "
          type="text"
          onChange={ this.handleChange }
          value={ nome }
          name="nome"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="endereco: "
          type="text"
          onChange={ this.handleChange }
          value={ endereco }
          name="endereco"
          required
        />
        <Input
          label="cidade: "
          type="text"
          onChange={ this.handleChange }
          name="cidade"
          value={ cidade }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ estado }
          label="Estado: "
          id="estado"
          name="estado"
          options={ states }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ () => this.handleClick() }
        />
        { complete && <Redirect to="/professionalform" /> }
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  submitInfo: Proptypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitInfo: (payload) => dispatch(submitPersonalInfo(payload)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
