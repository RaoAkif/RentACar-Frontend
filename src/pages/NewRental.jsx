import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRental } from '../redux/rental/rentalsReducer';
import { fetchCars } from '../redux/car/car';

function NewRental() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cars = useSelector((store) => store.car);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSubmitRent = (e) => {
    e.preventDefault();
    const form = e.target;
    const obj = {
      car_id: form.car.value,
      date: form.date.value,
      city: form.city.value,
    };
    dispatch(addRental(obj));
    navigate('/rentals');
  };

  return (
    <div>
      <h2>Rent A Car</h2>
      <form className="newRentalForm" onSubmit={handleSubmitRent}>
        <select name="car" id="car">
          {cars.map((car) => (
            <option key={car.id} value={car.id}>
              {car.name}
              {' '}
              {car.model}
            </option>
          ))}
        </select>
        <br />
        <input type="text" name="city" id="city" placeholder="City" required />
        <input type="date" name="date" id="date" placeholder="Date" required />
        <br />
        <button type="submit">Rent Now</button>
      </form>
    </div>
  );
}

export default NewRental;
