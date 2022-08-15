import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRentals } from '../redux/rental/rentalsReducer';
import CarCard from '../components/CarCard';

function Rentals() {
  const dispatch = useDispatch();
  const rentals = useSelector((store) => store.rentals);

  useEffect(() => {
    dispatch(fetchRentals());
  }, [dispatch]);

  const emptyRentalsPage = <h2>You don&apos;t have any rentals yet</h2>;

  const rentalsPage = rentals.map((rent) => (
    <CarCard
      key={rent.id}
      carName={rent.carName}
      model={rent.model}
      price={rent.price}
      image={rent.image}
      city={rent.city}
      date={rent.date}
    />
  ));

  if (rentals.length === 0) {
    return emptyRentalsPage;
  }

  return rentalsPage;
}

export default Rentals;
