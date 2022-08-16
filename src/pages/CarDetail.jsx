import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCarDetails } from '../redux/car/car';

function CarDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector((store) => store.car);

  useEffect(() => {
    dispatch(fetchCarDetails(id));
  }, [dispatch]);

  return (
    <div className="carDetail">
      <div>
        <h2>{car.name}</h2>
        <p className="carModel">{car.model}</p>
      </div>
      <div className="carInfoGroup">
        <div className="carImage"><img src={car.image} alt={car.name + car.model} /></div>
        <div className="carInfo">
          <p className="carPrice">{car.rent}</p>
          <p className="carDesc">{car.desc}</p>

          <button className="rentBtn" type="button">Rent</button>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
