import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DeleteCarCard from '../components/DeleteCarCard';
import { fetchCars, deleteCar } from '../redux/car/car';
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

  const emptyCarsPage = <h2>There are no cars</h2>;

  const carsPage = (
    <div className="delete-car-main">
      <h2 className="title">DELETE&nbsp;&nbsp;CAR</h2>
      <form className="d-cars-delete-cards" onSubmit={handleDelete}>
        <table className="table table-striped table-bordered delete-table">
          <thead className="table-dark">
            <tr>
              <th className="th-checkbox" scope="col"> </th>
              <th scope="col">Company</th>
              <th scope="col">Model</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <DeleteCarCard
                key={car.id}
                id={car.id}
                name={car.name}
                model={car.model}
              />
            ))}
          </tbody>
        </table>
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
