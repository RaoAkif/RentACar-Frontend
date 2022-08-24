import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { render } from '@testing-library/react';
import DeleteCar from '../pages/DeleteCar';

describe('DeleteCar', () => {  
  it('should render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <DeleteCar />
        </Provider>,
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
