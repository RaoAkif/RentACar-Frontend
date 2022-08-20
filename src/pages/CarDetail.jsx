import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCarDetails } from '../redux/car/detail';
import './CarDetail.css';

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
      <div className="car-image-div"><img className="car-image" src={car.image} alt={car.name + car.model} /></div>
      <div className="carInfo">
        <div className="name-model">
          <h3>{car.name}</h3>
          <p>{car.model}</p>
        </div>
        <p className="carPrice">{car.rent}</p>
        <p className="carDesc">{car.desc}</p>
        <button id="form-btn-cd" type="button" onClick={redirectHandler}>Rent</button>
      </div>
    </div>
  );
}

export default CarDetail;
