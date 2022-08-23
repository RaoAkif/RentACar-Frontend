import React from 'react';
import PropTypes from 'prop-types';
import './CarCard.css';

function RentCard(props) {
  const {
    carName,
    model,
    price,
    image,
    city,
    date,
  } = props;

  return (
    <div className="rent-card">
      <div className="car-image-div">
        <img className="car-image" src={image} alt={carName} />
      </div>

      <div className="rent-car-info">
        <h3>{carName}</h3>

        <table className="table table-striped table-bordered rent-table">
          <tbody>
            <tr>
              <td className="text-start"><span>Model:</span></td>
              <td className="text-end">{model}</td>
            </tr>
            <tr>
              <td className="text-start"><span>Rent:</span></td>
              <td className="text-end">{price}</td>
            </tr>
            <tr>
              <td className="text-start"><span>City:</span></td>
              <td className="text-end">{city}</td>
            </tr>
            <tr>
              <td className="text-start"><span>Date:</span></td>
              <td className="text-end">{date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

RentCard.defaultProps = {
  city: '',
  date: '',
};

RentCard.propTypes = {
  carName: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  city: PropTypes.string,
  date: PropTypes.string,
};

export default RentCard;
