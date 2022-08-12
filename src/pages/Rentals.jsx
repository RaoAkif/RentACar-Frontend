import React from 'react';
import CarCard from '../components/CarCard';

function Rentals() {
  const rents = [
    {
      carName: 'Audi', model: 'A4', price: '$200', image: 'https://www.audiusa.com/wp-content/uploads/2018/06/audi-a4-2018-1.jpg', city: 'New York', date: '12/12/2018',
    },
    {
      carName: 'Ford', model: 'Fiesta', price: '$100', image: 'https://www.ford.com/content/dam/ford/na/us/english/vehicle-overview/fiesta/fiesta-overview-hero.png', city: 'New York', date: '12/12/2018',
    },
  ];

  return (
    <div>
      <h2>Rentals</h2>
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
