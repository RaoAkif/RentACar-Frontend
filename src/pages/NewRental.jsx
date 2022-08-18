import React, { useEffect, useState } from 'react';

import './NewRental.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRental } from '../redux/rental/rentalsReducer';
import { fetchCars } from '../redux/car/car';

function NewRental() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cars = useSelector((store) => store.car);
  const currentCar = useSelector((store) => store.carDetail);
  const [selectCar, setSelectCar] = useState(currentCar.id);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSubmitRent = (e) => {
    e.preventDefault();
    const form = e.target;
    const obj = {
      car_id: form.car.value,
      date: form.date.value,
      city: form.city.value,
    };
    dispatch(addRental(obj));
    navigate('/rentals');
  };

  const emptyCarList = <h2>There are no cars available</h2>;

  const rentCar = (
    <div className="add-rental-main">
      <h2>Rent A Car</h2>
      <Form onSubmit={handleSubmitRent}>
        <Form.Group className=" form-control-lg" controlId="formSelectCar">
          <Form.Label>Select a Car</Form.Label>
          <Form.Select className="form-control-lg" name="car" id="car" value={selectCar} onChange={(e) => setSelectCar(e.target.value)}>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {`${car.name} ${car.model} ($${car.rent})`}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 form-control-lg" controlId="formGridAddress1">
          <Form.Label>City</Form.Label>
          <Form.Control name="city" placeholder="City Name" />
        </Form.Group>
        <Form.Group className="mb-3 form-control-lg" controlId="dob">
          <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" name="date" placeholder="Date of Birth" />
        </Form.Group>

        <Button id="form-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );

  if (cars.length === 0) {
    return emptyCarList;
  }

  return rentCar;
}

export default NewRental;
