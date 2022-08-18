import React from 'react';
import './AddCar.css';

function AddCar() {
  return (
    <div className="addCar">
      <h2>Add Car</h2>
      <form className="addCarForm">
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
