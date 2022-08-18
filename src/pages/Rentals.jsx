import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRentals, deleteRental } from '../redux/rental/rentalsReducer';
import CarCard from '../components/CarCard';
import './Rentals.css';

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

  const rentalsPage = (
    <div>
      <h2 className="page-title">Rentals</h2>
      <div className="rentals">
        {rentals.map((rent) => (
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
        ))}
      </div>
    </div>
  );

  if (rentals.length === 0) {
    return emptyRentalsPage;
  }

  return rentalsPage;
}

export default Rentals;
