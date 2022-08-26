import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Home from '../pages/Home';

describe('Home page', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
