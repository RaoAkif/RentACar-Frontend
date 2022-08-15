import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/';
const FETCH_RENTALS = 'FETCH_RENTALS';
const ADD_RENTAL = 'ADD_RENTAL';
const DELETE_RENTAL = 'DELETE_RENTAL';
const initialState = [];

export const fetchRentals = () => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await axios.get(`${baseUrl}users/${user.id}/reservations`);
  dispatch({
    type: FETCH_RENTALS,
    payload: res.data,
  });
};

export const addRental = (rental) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await axios.post(`${baseUrl}users/${user.id}/reservations`, rental);
  dispatch({
    type: ADD_RENTAL,
    payload: res.data,
  });
};

export const deleteRental = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await axios.delete(`${baseUrl}users/${user.id}/reservations/${id}`);
  dispatch({
    type: DELETE_RENTAL,
    payload: res.data,
    element: id,
  });
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_RENTALS':
      return action.payload;
    case 'ADD_RENTAL':
      return [...state, action.payload];
    case 'DELETE_RENTAL':
      return state.filter((rental) => rental.id !== action.element);
    default:
      return state;
  }
};

export default reducer;
