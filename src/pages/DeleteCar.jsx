import React from 'react';
import DeleteCarCard from '../components/DeleteCarCard';
import './DeleteCar.css';

function DeleteCar() {
  const cars = [
    {
      name: 'BMW', model: 'M3', rent: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', desc: 'This is a description of the car',
    },
    {
      name: 'Audi', model: 'A4', rent: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', desc: 'This is a description of the car',
    },
    {
      name: 'BMW', model: 'M3', rent: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', desc: 'This is a description of the car',
    },
    {
      name: 'Audi', model: 'A4', rent: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', desc: 'This is a description of the car',
    },
  ];

  return (
    <div className="delete-car-main">
      <h2>DELETE&nbsp;&nbsp;CAR</h2>
      <form className="d-cars-delete-cards">
        {cars.map((car) => (
          <div className="d-car-delete-card" key={car.name}>
            <DeleteCarCard
              key={car.id}
              name={car.name}
              model={car.model}
              rent={car.rent}
              image={car.image}
              desc={car.desc}
            />
          </div>
        ))}
        <button className="delete-btn" type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteCar;
