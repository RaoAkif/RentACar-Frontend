import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRentals, deleteRental } from '../redux/rental/rentalsReducer';
import CarCard from '../components/CarCard';

function Rentals() {
  const dispatch = useDispatch();
  const rentals = useSelector((store) => store.rental);

  useEffect(() => {
    dispatch(fetchRentals());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteRental(id));
  };

  const emptyRentalsPage = <h2>You don&apos;t have any rentals yet</h2>;

  const rentalsPage = rentals.map((rent) => (
    <div key={rent.id}>
      <CarCard
        key={rent.id}
        carName={rent.car.name}
        model={rent.car.model}
        price={rent.car.rent}
        image={rent.car.image}
        city={rent.city}
        date={rent.date}
      />
      <button type="button" onClick={() => handleDelete(rent.id)}>
        Delete
      </button>
    </div>
  ));

  if (rentals.length === 0) {
    return emptyRentalsPage;
  }

  return rentalsPage;
}

export default Rentals;
