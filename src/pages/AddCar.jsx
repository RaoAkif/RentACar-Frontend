import React from 'react';
import './AddCar.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRental } from '../redux/rental/rentalsReducer';

function AddCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitCar = (e) => {
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
    <div className="add-car-main">
      <Form onSubmit={handleSubmitCar}>
        <h2 style={{ textAlign: 'center' }}>Add Car</h2>
        <Form.Group className="form-control-lg">
          <Form.Label>Car Name</Form.Label>
          <Form.Control placeholder="Car Name" className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg">
          <Form.Label>Car Model</Form.Label>
          <Form.Control placeholder="Car Model" className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg">
          <Form.Label>Image URL</Form.Label>
          <Form.Control placeholder="https://example.com" className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg">
          <Form.Label>Description</Form.Label>
          <Form.Control placeholder="Write the desription..." className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg" controlId="dob">
          <Form.Label>Rent</Form.Label>
          <Form.Control type="number" name="rent" placeholder="Rent Amout" />
        </Form.Group>
        <Button id="form-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddCar;
