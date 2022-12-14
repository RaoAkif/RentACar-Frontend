import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import DeleteCarCard from '../components/DeleteCarCard';

describe('DeleteCarCard', () => {
  const car = {
    id: 1, name: 'Audi', model: 'R3', price: '100', image: 'https://www.audi.com/content/dam/audi/us/en/all-models/a4/a4-allroad-quattro/2020/models-a4-allroad-quattro-2020-hero.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
  };

  it('should render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <table>
            <tbody>
              <DeleteCarCard
                id={car.id}
                name={car.name}
                model={car.model}
                price={car.price}
                image={car.image}
              />
            </tbody>
          </table>
        </Provider>
        ,
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
