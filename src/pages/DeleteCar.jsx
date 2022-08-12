import React from 'react';
import CarCard from '../components/CarCard';

function DeleteCar() {
  const cars = [
    {
      name: 'BMW', model: 'M3', rent: '$100', image: 'https://th.bing.com/th/id/R.e8d460c004d696c3255d513978bfb864?rik=4bBYE9ASyq7lWg&riu=http%3a%2f%2fwww.marinoperformancemotors.com%2fimagetag%2f12652%2f37%2fl%2fUsed-2018-BMW-M3.jpg&ehk=RTlfzS94QNQ836EwJMu3p4xkRWqZMfkGTEo%2b99cBmgs%3d&risl=&pid=ImgRaw&r=0', desc: 'This is a description of the car',
    },
    {
      name: 'Audi', model: 'A4', rent: '$100', image: 'https://th.bing.com/th/id/R.e8d460c004d696c3255d513978bfb864?rik=4bBYE9ASyq7lWg&riu=http%3a%2f%2fwww.marinoperformancemotors.com%2fimagetag%2f12652%2f37%2fl%2fUsed-2018-BMW-M3.jpg&ehk=RTlfzS94QNQ836EwJMu3p4xkRWqZMfkGTEo%2b99cBmgs%3d&risl=&pid=ImgRaw&r=0', desc: 'This is a description of the car',
    },
  ];

  return (
    <div>
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
