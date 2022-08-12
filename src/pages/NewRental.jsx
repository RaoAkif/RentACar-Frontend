import React from 'react';

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
    <div>
      <h2>Rent A Car</h2>
      <form className="newRentalForm" onSubmit={handleSubmitRent}>
        <select name="car" id="car">
          {cars.map((car) => (
            <option key={car} value={car.id}>
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
