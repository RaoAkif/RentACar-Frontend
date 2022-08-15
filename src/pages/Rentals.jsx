import React from 'react';
import { useSelector } from 'react-redux';
import CarCard from '../components/CarCard';

function Rentals() {
  const rentals = useSelector((store) => store.rentals);

  const emptyRentalsPage = <h2>You don't have any rentals yet</h2>;

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
