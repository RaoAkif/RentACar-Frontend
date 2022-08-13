import React from 'react';
import './NewRental.css';

function NewRental() {
  const cars = [
    { id: 1, name: 'Audi', model: 'A4' },
    { id: 2, name: 'BMW', model: 'X5' },
    { id: 3, name: 'Mercedes', model: 'C class' },
  ];

  const handleSubmitRent = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <div className="add-rental-main">
      <h2>Rent A Car</h2>
      <form className="newRentalForm" onSubmit={handleSubmitRent}>
        <select name="car" id="car" className="form-select form-select-lg mb-3" aria-label=".form-select-lg">
          {cars.map((car) => (
            <option key={car} value={car.id}>
              {car.name}
              {' '}
              {car.model}
            </option>
          ))}
        </select>
        <input className="form-control form-control-lg" type="text" placeholder="City" aria-label=".form-control-lg example" required />
        <input type="date" name="date" id="date" placeholder="Date" className=".form-control-lg" required aria-label=".form-control-lg" />
        <br />
        <button id="btn-date-picker" type="submit">Rent Now</button>
      </form>
    </div>
  );
}

export default NewRental;
