const baseUrl = 'http://localhost:3000/api/v1/';
const FETCH_RENTALS = 'FETCH_RENTALS';
// const ADD_RENTAL = 'ADD_RENTAL';
// const DELETE_RENTAL = 'DELETE_RENTAL';
const initialState = [];

export const fetchRentals = () => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await fetch(`${baseUrl}users/${user.id}/reservations`);
  const rentals = await res.json();
  dispatch({
    type: FETCH_RENTALS,
    payload: rentals,
  });
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_RENTALS':
      return action.payload;
    // case 'ADD_RENTAL':
    //   return [...state, action.payload];
    // case 'DELETE_RENTAL':
    //   return state.filter((rental) => rental.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
