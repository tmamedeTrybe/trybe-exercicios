import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { submitProfessionalInfo } from '../redux/actions/action';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
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
    const { curriculo, cargo, descricao, complete } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button
          label="enviar"
          onClick={ () => this.handleClick() }
        />
        { complete && <Redirect to="/formdisplay" /> }
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  submitInfo: Proptypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitInfo: (payload) => dispatch(submitProfessionalInfo(payload)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
