import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../redux/car/car';
import './AddCar.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRental } from '../redux/rental/rentalsReducer';

function AddCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleSubmit = (e) => {
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
    <div className="addCar">
      <h2>Add Car</h2>
      <form className="addCarForm" onSubmit={handleSubmit}>
        <input type="text" placeholder="Car Name" name="name" className="form-control form-control-lg" aria-label=".form-control-lg example" required />
        <br />
        <input type="text" placeholder="Model" name="model" className="form-control form-control-lg" aria-label=".form-control-lg" required />
        <br />
        <input type="text" placeholder="Image Url" name="image" className="form-control form-control-lg" aria-label=".form-control-lg" required />
        <br />
        <input type="textarea" placeholder="Description" name="desc" className="form-control form-control-lg" aria-label=".form-control-lg" required />
        <br />
        <input type="number" min="0.00" step="10.00" placeholder="Rent Cost" name="rent" className="form-control form-control-lg" aria-label=".form-control-lg" required />
        <br />
        <button id="btn-add-car" variant="primary" type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;
