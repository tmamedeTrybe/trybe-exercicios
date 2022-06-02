import { SUBMIT_PROFESSIONAL_INFO } from '../actions/action';

const initialState = {
  professionalForm: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
};

function professionalReducer(state = initialState, action) {
  switch (action.type) {
  case SUBMIT_PROFESSIONAL_INFO:
    return {
      ...state,
      professionalForm: {
        ...state.professionalForm,
        curriculo: action.curriculo,
        cargo: action.cargo,
        descricao: action.descricao,
      },
    };
  default:
    return state;
  }
}

export default professionalReducer;
