import React from 'react';
import './CarDetail.css';

function CarDetail() {
  const name = 'BMW';
  const model = 'M3';
  const rent = '$100';
  const image = 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png';
  const desc = 'This is a description of the car';

  return (
    <div className="carDetail">
      <div className="carImage"><img src={image} alt={name + model} /></div>
      <div className="carInfo">
        <div className="name-model">
          <h3>{name}</h3>
          <p>{model}</p>
        </div>
        <p className="carPrice">{rent}</p>
        <p className="carDesc">{desc}</p>
        <button id="form-btn-cd" type="button">Rent</button>
      </div>
    </div>
  );
}

export default CarDetail;
