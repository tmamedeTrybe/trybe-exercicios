import { SUBMIT_PERSONAL_INFO } from '../actions/action';

const initialState = {
  personalForm: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
};

function personalReducer(state = initialState, action) {
  switch (action.type) {
  case SUBMIT_PERSONAL_INFO:
    return {
      ...state,
      personalForm: {
        ...state.personalForm,
        nome: action.nome,
        email: action.email,
        cpf: action.cpf,
        endereco: action.endereco,
        cidade: action.cidade,
        estado: action.estado,
      },
    };
  default:
    return state;
  }
}

export default personalReducer;
