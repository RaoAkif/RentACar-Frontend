import React from 'react';
// import { useParams } from "react-router-dom";

function CarDetail() {
  // const { id } = useParams();
  const name = 'BMW';
  const model = 'M3';
  const rent = '$100';
  const image = 'https://th.bing.com/th/id/R.e8d460c004d696c3255d513978bfb864?rik=4bBYE9ASyq7lWg&riu=http%3a%2f%2fwww.marinoperformancemotors.com%2fimagetag%2f12652%2f37%2fl%2fUsed-2018-BMW-M3.jpg&ehk=RTlfzS94QNQ836EwJMu3p4xkRWqZMfkGTEo%2b99cBmgs%3d&risl=&pid=ImgRaw&r=0';
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
