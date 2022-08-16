import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="carImage">
        <img src={image} alt={carName} />
      </div>
      <div className="rent-card-info">
        <h3>{carName}</h3>
        <p>{model}</p>
        <p>{price}</p>
        <p>{city}</p>
        <p>{date}</p>
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
