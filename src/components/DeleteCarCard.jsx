import React from 'react';
import PropTypes from 'prop-types';
import './DeleteCarCard.css';

function RentCard(props) {
  const {
    name,
    model,
    rent,
    image,
    desc,
  } = props;

  return (
    <div className="d-rent-card">
      <input type="checkbox" name="delCar" id={name} />
      <div className="d-car-image-div">
        <img className="d-car-image" src={image} alt={name} />
      </div>
      <div className="d-rent-card-info">
        <div className="d-name-model mb-4">
          <h3>{name}</h3>
        </div>

        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="text-start">Model:</td>
              <td className="text-end">{model}</td>
            </tr>
            <tr>
              <td className="text-start">Rent:</td>
              <td className="text-end">{rent}</td>
            </tr>
          </tbody>
        </table>

        <p>{desc}</p>
        {/* <button className="delete-btn" type="submit">Delete</button> */}
      </div>
    </div>
  );
}

RentCard.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  rent: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default RentCard;
