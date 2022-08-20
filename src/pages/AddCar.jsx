import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addCar } from '../redux/car/car';
import './AddCar.css';

function AddCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitCar = (e) => {
    e.preventDefault();
    const form = e.target;
    const obj = {
      name: form.name.value,
      model: form.model.value,
      image: form.image.value,
      desc: form.desc.value,
      rent: form.rent.value,
    };
    dispatch(addCar(obj));
    navigate('/');
  };

  return (
    <div className="add-car-main">
      <Form className="addCar" onSubmit={handleSubmitCar}>
        <h2 style={{ textAlign: 'center' }}>Add Car</h2>
        <Form.Group className="form-control-lg">
          <Form.Label>Car Name</Form.Label>
          <Form.Control name="name" placeholder="Car Name" className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg">
          <Form.Label>Car Model</Form.Label>
          <Form.Control name="model" placeholder="Car Model" className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg">
          <Form.Label>Image URL</Form.Label>
          <Form.Control name="image" placeholder="https://example.com" className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg">
          <Form.Label>Description</Form.Label>
          <Form.Control name="desc" placeholder="Write the desription..." className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg" controlId="dob">
          <Form.Label>Rent</Form.Label>
          <Form.Control type="number" name="rent" placeholder="Rent Amout" />
        </Form.Group>
        <Button id="form-btn" variant="primary" type="submit">
          Add Car
        </Button>
      </Form>
    </div>
  );
}

export default AddCar;
