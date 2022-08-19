import React from 'react';
import PropTypes from 'prop-types';

function RentCard(props) {
  const {
    name,
    model,
  } = props;

  return (
    <tr key={name}>
      <th scope="row" className="td-checkbox">
        <input type="checkbox" name="delCar" id={name} />
      </th>
      <td className="text-start">{name}</td>
      <td className="text-start">{model}</td>
    </tr>
  );
}

RentCard.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default RentCard;
