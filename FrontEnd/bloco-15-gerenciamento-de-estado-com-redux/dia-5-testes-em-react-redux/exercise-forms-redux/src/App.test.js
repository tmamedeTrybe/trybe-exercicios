import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './redux/reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) => ({
  ...render(
    <Provider store={ store }>
      {component}
    </Provider>,
  ),
  store,
});
