import React from 'react';
import CarCard from '../components/CarCard';
import './Rentals.css';

function Rentals() {
  const rents = [
    {
      carName: 'Audi', model: 'A4', price: '$200', image: 'https://th.bing.com/th/id/R.e8d460c004d696c3255d513978bfb864?rik=4bBYE9ASyq7lWg&riu=http%3a%2f%2fwww.marinoperformancemotors.com%2fimagetag%2f12652%2f37%2fl%2fUsed-2018-BMW-M3.jpg&ehk=RTlfzS94QNQ836EwJMu3p4xkRWqZMfkGTEo%2b99cBmgs%3d&risl=&pid=ImgRaw&r=0', city: 'New York', date: '12/12/2018',
    },
    {
      carName: 'Ford', model: 'Fiesta', price: '$100', image: 'https://th.bing.com/th/id/R.e8d460c004d696c3255d513978bfb864?rik=4bBYE9ASyq7lWg&riu=http%3a%2f%2fwww.marinoperformancemotors.com%2fimagetag%2f12652%2f37%2fl%2fUsed-2018-BMW-M3.jpg&ehk=RTlfzS94QNQ836EwJMu3p4xkRWqZMfkGTEo%2b99cBmgs%3d&risl=&pid=ImgRaw&r=0', city: 'New York', date: '12/12/2018',
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
