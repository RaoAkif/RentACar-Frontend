import React from 'react';
import CarCard from '../components/CarCard';
import './DeleteCar.css';

function DeleteCar() {
  const cars = [
    {
      name: 'BMW', model: 'M3', rent: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', desc: 'This is a description of the car',
    },
    {
      name: 'Audi', model: 'A4', rent: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', desc: 'This is a description of the car',
    },
  ];

  return (
    <div className="delete-car-main">
      <h2>Delete Car</h2>
      <form className="carsDelCards">
        {cars.map((car) => (
          <div className="carDelCard" key={car.name}>
            <CarCard
              key={car.id}
              name={car.name}
              model={car.model}
              rent={car.rent}
              image={car.image}
              desc={car.desc}
            />
            <input type="checkbox" name="delCar" id={car.name} />
          </div>
        ))}
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteCar;
