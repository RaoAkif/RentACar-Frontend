import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/';
const FETCH_CARS = 'FETCH_CARS';
// const ADD_CAR = 'ADD_CAR';
// const DELETE_CAR = 'DELETE_CAR';
const initialState = [];

export const fetchCars = () => async (dispatch) => {
  const res = await axios.get(`${baseUrl}cars`);
  dispatch({
    type: FETCH_CARS,
    payload: res.data,
  });
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_CARS':
      return action.payload;
    // case 'ADD_CAR':
    //   return [...state, action.payload];
    // case 'DELETE_CAR':
    //   return state.filter((car) => car.id !== action.element);
    default:
      return state;
  }
};

export default reducer;
