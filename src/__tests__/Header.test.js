import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Header from '../components/Header';

describe('Header', () => {
  it('should render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
        ,
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
