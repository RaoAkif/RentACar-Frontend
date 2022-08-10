import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from '../redux/icecream/icecreamSlice';

function IcecreamView() {
  const [value, setValue] = React.useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        Number of ice creams -
        {numOfIcecreams}
      </h2>
      <button type="button" onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <input
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button type="button" onClick={() => dispatch(restocked(value))}>
        Restock Ice creams
      </button>
    </div>
  );
}

export default IcecreamView;
