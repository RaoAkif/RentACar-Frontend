import { configureStore } from '@reduxjs/toolkit';
import car from './car/car';
import rental from './rental/rentalsReducer';
import user from './user/user';

const store = configureStore({
  reducer: {
    car,
    rental,
    user,
  },
});

export default store;
