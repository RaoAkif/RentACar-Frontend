import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
    {
      carName: 'Ford', model: 'Fiesta', price: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', city: 'New York', date: '12/12/2018',
    },
    {
      carName: 'Ford', model: 'Fiesta', price: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', city: 'New York', date: '12/12/2018',
    },
    {
      carName: 'Ford', model: 'Fiesta', price: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', city: 'New York', date: '12/12/2018',
    },
    {
      carName: 'Ford', model: 'Fiesta', price: '$100', image: 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png', city: 'New York', date: '12/12/2018',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} className="carousel-container" infinite>
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
    </Carousel>
  );
}

export default Rentals;
