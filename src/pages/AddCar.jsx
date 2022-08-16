import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../redux/car/car';

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
        <input type="text" placeholder="Brand" name="name" required />
        <br />
        <input type="text" placeholder="Model" name="model" required />
        <br />
        <input type="text" placeholder="Image Url" name="image" required />
        <br />
        <input type="textarea" placeholder="Description" name="desc" required />
        <br />
        <input type="number" min="0.00" step="10.00" placeholder="Rent Cost" name="rent" required />
        <br />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;
