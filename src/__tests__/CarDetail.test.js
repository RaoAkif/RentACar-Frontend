import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { render } from '@testing-library/react';
import CarDetail from '../pages/CarDetail';

describe('CarDetail', () => {  
  it('should render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CarDetail />
        </Provider>,
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
