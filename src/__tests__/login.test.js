import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { render } from '@testing-library/react';
import Login from '../pages/auth/login';

describe('Login', () => {  
  it('should render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>,
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
