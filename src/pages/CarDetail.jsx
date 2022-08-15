import React from 'react';
// import { useParams } from "react-router-dom";

function CarDetail() {
  // const { id } = useParams();
  const name = 'BMW';
  const model = 'M3';
  const rent = '$100';
  const image = 'https://raw.githubusercontent.com/CodeBitChips/Images/main/cars/bmw-m3.png';
  const desc = 'This is a description of the car';

  return (
    <div className="carDetail">
      <div>
        <h2>{name}</h2>
        <p className="carModel">{model}</p>
      </div>
      <div className="carInfoGroup">
        <div className="carImage"><img src={image} alt={name + model} /></div>
        <div className="carInfo">
          <p className="carPrice">{rent}</p>
          <p className="carDesc">{desc}</p>

          <button className="rentBtn" type="button">Rent</button>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
