import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRental } from '../redux/rental/rentalsReducer';
import { fetchCars } from '../redux/car/car';
import NotFound from './NotFound';
import './NewRental.css';

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

  const msg = 'There are no cars available.';
  const emptyCarList = <NotFound msg={msg} />;

  const rentCar = (
    <div className="add-rental-main">
      <h2 className="title">NEW&nbsp;&nbsp;RENTAL</h2>
      <p className="rent-subtitle">(Rent a car for a week)</p>
      <Form className="add-rental-form" onSubmit={handleSubmitRent}>
        <Form.Group className=" form-control-lg" controlId="formSelectCar">
          <Form.Select name="car" id="car" value={selectCar} onChange={(e) => setSelectCar(e.target.value)}>
            <option value="">Select a Car</option>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {`${car.name} ${car.model} ($${car.rent})`}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="form-control-lg" controlId="formGridAddress1">
          <Form.Control name="city" placeholder="City Name" />
        </Form.Group>
        <Form.Group className="form-control-lg" controlId="dob">
          <Form.Label className="rent-subtitle">Select a pickup date:</Form.Label>
          <Form.Control type="date" name="date" placeholder="Date" />
        </Form.Group>

        <Button className="btn btn-white" id="form-btn" variant="primary" type="submit">
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
