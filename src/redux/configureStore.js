import { configureStore } from '@reduxjs/toolkit';
import car from './car/car';
import carDetail from './car/detail';
import rental from './rental/rentalsReducer';
import user from './user/user';

const store = configureStore({
  reducer: {
    car,
    carDetail,
    rental,
    user,
  },
});

export default store;
