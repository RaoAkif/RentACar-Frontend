import React from 'react';

import './NewRental.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRental } from '../redux/rental/rentalsReducer';

function NewRental() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cars = [
    { id: 1, name: 'Audi', model: 'A4' },
    { id: 2, name: 'BMW', model: 'X5' },
    { id: 3, name: 'Mercedes', model: 'C class' },
  ];

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

  return (
    <div className="add-rental-main">
      <h2>Rent A Car</h2>
      <Form onSubmit={handleSubmitRent}>
        <Form.Group className=" form-control-lg" controlId="formSelectCar">
          <Form.Label>Select a Car</Form.Label>
          <Form.Select className="form-control-lg">
            {cars.map((car) => (
              <option key={car} value={car.id}>
                {car.name}
                {' '}
                {car.model}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 form-control-lg" controlId="formGridAddress1">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="City Name" />
        </Form.Group>
        <Form.Group className="mb-3 form-control-lg" controlId="dob">
          <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" name="dob" placeholder="Date of Birth" />
        </Form.Group>
        <Button id="form-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewRental;
