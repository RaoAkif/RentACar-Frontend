import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CarCard from '../components/CarCard';
import { fetchCars, deleteCar } from '../redux/car/car';

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

  const emptyCarsPage = <h2>There are no cars available</h2>;
  const carsPage = (
    <div>
      <h2>Delete Car</h2>
      <form className="carsDelCards" onSubmit={handleDelete}>
        {cars.map((car) => (
          <div className="carDelCard" key={car.name}>
            <CarCard
              key={car.id}
              carName={car.name}
              model={car.model}
              price={car.rent}
              image={car.image}
              desc={car.desc}
            />
            <input type="checkbox" name="delCar" id={car.id} />
          </div>
        ))}
        <button type="submit">Remove Cars</button>
      </form>
    </div>
  );

  if (cars.length === 0) {
    return emptyCarsPage;
  }
  return carsPage;
}

export default DeleteCar;
