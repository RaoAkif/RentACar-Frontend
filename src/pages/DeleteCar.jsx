import React from 'react';
import DeleteCarCard from '../components/DeleteCarCard';
import './DeleteCar.css';

function DeleteCar() {
  const cars = [
    {
      id: '1', name: 'BMW', model: 'M3', rent: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', desc: 'This is a description of the car',
    },
    {
      id: '2', name: 'Audi', model: 'A4', rent: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', desc: 'This is a description of the car',
    },
    {
      id: '3', name: 'BMW', model: 'M3', rent: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', desc: 'This is a description of the car',
    },
    {
      id: '4', name: 'Audi', model: 'A4', rent: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', desc: 'This is a description of the car',
    },
  ];

  return (
    <div className="delete-car-main">
      <h2>DELETE&nbsp;&nbsp;CAR</h2>
      <form className="d-cars-delete-cards">
        <table className="table table-striped table-bordered delete-table">
          <thead className="table-dark">
            <tr>
              <th className="th-checkbox" scope="col"> </th>
              <th scope="col">Company</th>
              <th scope="col">Model</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <DeleteCarCard
                key={car.id}
                name={car.name}
                model={car.model}
              />
            ))}
          </tbody>
        </table>
        <button className="delete-btn" type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteCar;
