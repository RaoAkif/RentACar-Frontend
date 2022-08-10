import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from '../redux/cake/cakeSlice';

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        Number of cakes -
        {numOfCakes}
      </h2>
      <button type="button" onClick={() => dispatch(ordered())}>Order Cake</button>
      <button type="button" onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
}

export default CakeView;
