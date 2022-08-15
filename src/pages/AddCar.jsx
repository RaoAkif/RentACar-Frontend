import React from 'react';

function AddCar() {
  return (
    <div className="addCar">
      <h2>Add Car</h2>
      <form className="addCarForm">
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
