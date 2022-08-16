import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/car/car';
import CarCard from '../components/CarCard';

function Home() {
  const dispatch = useDispatch();
  const cars = useSelector((store) => store.car);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const emptyCarsPage = <h2>There are no cars available</h2>;

  const carsPage = cars.map((car) => (
    <div key={car.id}>
      <a href={`/car-detail/${car.id}`}>
        <CarCard
          key={car.id}
          carName={car.name}
          model={car.model}
          price={car.rent}
          image={car.image}
          city={car.city}
          date={car.date}
        />
      </a>
    </div>
  ));

  if (cars.length === 0) {
    return emptyCarsPage;
  }

  return carsPage;
}

export default Home;
