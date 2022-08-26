import axios from 'axios';

const baseUrl = 'https://rent-a-car-bk.herokuapp.com/api/v1/';
const FETCH_CAR_DETAILS = 'FETCH_CAR_DETAILS';
const initialState = [];

export const fetchCarDetails = (id) => async (dispatch) => {
  const res = await axios.get(`${baseUrl}cars/${id}`);
  dispatch({
    type: FETCH_CAR_DETAILS,
    payload: res.data,
  });
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_CAR_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
