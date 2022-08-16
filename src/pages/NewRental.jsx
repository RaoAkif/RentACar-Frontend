import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRental } from '../redux/rental/rentalsReducer';

function NewRental() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cars = [
    { id: 1, name: 'Audi', model: 'A4' },
    { id: 2, name: 'BMW', model: 'X5' },
    { id: 3, name: 'Mercedes', model: 'C class' },
  ];

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
