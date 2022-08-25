import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DeleteCarCard from '../components/DeleteCarCard';
import { fetchCars, deleteCar } from '../redux/car/car';
import NotFound from './NotFound';
import './DeleteCar.css';

function DeleteCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cars = useSelector((store) => store.car);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleDelete = (e) => {
    e.preventDefault();
    const elements = document.querySelectorAll('input[type="checkbox"]');
    elements.forEach((element) => {
      if (element.checked) {
        dispatch(deleteCar(element.id));
      }
    });
    navigate('/');
  };

  const msg = 'There are no cars available.';
  const emptyCarsPage = <NotFound msg={msg} />;

  const carsPage = (
    <div className="delete-car-main">
      <h2 className="title">DELETE&nbsp;&nbsp;CAR</h2>
      <form className="delete-form" onSubmit={handleDelete}>
        <div className="delete-row row-header">
          <div className="delete-col col-l"> </div>
          <div className="delete-col col-c">COMPANY</div>
          <div className="delete-col col-r">MODEL</div>
        </div>
        {cars.map((car) => (
          <DeleteCarCard
            key={car.id}
            id={car.id}
            name={car.name}
            model={car.model}
          />
        ))}
        <button className="btn btn-green" type="submit">Delete</button>
      </form>
    </div>
  );

  if (cars.length === 0) {
    return emptyCarsPage;
  }
  return carsPage;
}

export default DeleteCar;
