import React from 'react';
import PropTypes from 'prop-types';
import './HomeCarCard.css';

function RentCard(props) {
  const {
    carName,
    model,
    image,
    desc,
  } = props;

  return (
    <div className="rent-card">
      <div className="home-car-image-div">
        <img className="home-car-image" src={image} alt={carName} />
      </div>
      <div className="home-card-info">
        <div className="home-name-model">
          <h3>{carName}</h3>
          &nbsp;
          <h3 className="model">{model}</h3>
        </div>
        <hr />
        <p id="homepage-car-desc">{desc}</p>
      </div>
    </div>
  );
}

RentCard.defaultProps = {
  desc: '',
};

RentCard.propTypes = {
  carName: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default RentCard;
