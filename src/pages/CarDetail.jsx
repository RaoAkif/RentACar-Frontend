import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCarDetails } from '../redux/car/detail';

function CarDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const car = useSelector((store) => store.carDetail);

  useEffect(() => {
    dispatch(fetchCarDetails(id));
  }, [dispatch]);

  const redirectHandler = () => {
    navigate('/add_rental');
  };

  return (
    <div className="carDetail">
      <div>
        <h2>{car.name}</h2>
        <p className="carModel">{car.model}</p>
      </div>
      <div className="carInfoGroup">
        <div className="car-image-div"><img className="car-image" src={car.image} alt={car.model} /></div>
        <div className="carInfo">
          <p className="carPrice">{car.rent}</p>
          <p className="carDesc">{car.desc}</p>
          <button className="rentBtn" type="button" onClick={redirectHandler}>Rent</button>
        </div>
        <p className="carPrice">{rent}</p>
        <p className="carDesc">{desc}</p>
        <button id="form-btn-cd" type="button">Rent</button>
      </div>
    </div>
  );
}

export default CarDetail;
