import React from 'react';
import CarCard from '../components/CarCard';
import './Rentals.css';

function Rentals() {
  const rents = [
    {
      carName: 'Audi', model: 'A4', price: '$200', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', city: 'New York', date: '12/12/2018',
    },
    {
      carName: 'Ford', model: 'Fiesta', price: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', city: 'New York', date: '12/12/2018',
    },
  ];

  return (
    <div>
      <h2 className="page-title">Rentals</h2>
      <div className="rentals">
        {rents.map((rent) => (
          <CarCard
            key={rent.id}
            carName={rent.carName}
            model={rent.model}
            price={rent.price}
            image={rent.image}
            city={rent.city}
            date={rent.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Rentals;
