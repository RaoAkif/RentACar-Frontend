import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DeleteCarCard.css';
import { BsCircle, BsFillCheckCircleFill } from 'react-icons/bs';

function RentCard(props) {
  const {
    id,
    name,
    model,
  } = props;

  const [boxState, setBoxState] = useState(false);

  const handleBoxState = () => {
    setBoxState(!boxState);
  };

  return (
    <div key={name} className="delete-row">
      <div className="delete-col col-l">
        <BsFillCheckCircleFill className={boxState ? 'check' : 'check hidden'} />
        <BsCircle className="circle-box" />
        <input type="checkbox" className="check-box" id={id} onClick={() => handleBoxState()} />
      </div>
      <div className="delete-col col-c">{name}</div>
      <div className="delete-col col-r">{model}</div>
    </div>
  );
}

RentCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default RentCard;
