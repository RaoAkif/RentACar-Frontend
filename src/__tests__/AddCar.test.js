import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import AddCar from '../pages/AddCar';

describe('AddCar page', () => {
  it('should render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <AddCar />
        </Provider>
        ,
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
