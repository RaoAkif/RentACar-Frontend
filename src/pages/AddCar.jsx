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
      <h2 className="title">ADD&nbsp;&nbsp;CAR</h2>
      <Form className="add-car-form" onSubmit={handleSubmitCar}>
        <Form.Group className="form-control-lg">
          <Form.Control name="name" placeholder="Car Name" className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg">
          <Form.Control name="model" placeholder="Car Model" className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg">
          <Form.Control name="image" placeholder="Image URL" className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg">
          <Form.Control as="textarea" rows={3} name="desc" placeholder="Write the desription..." className="form-control-lg" />
        </Form.Group>
        <Form.Group className="form-control-lg" controlId="dob">
          <Form.Control type="number" name="rent" placeholder="Rent Amount" />
        </Form.Group>
        <Button className="btn btn-white" id="form-btn" variant="primary" type="submit">
          Add Car
        </Button>
      </Form>
    </div>
  );
}

export default AddCar;
