import { configureStore } from '@reduxjs/toolkit';
import rentalReducer from './rental/rentalReducer';

const store = configureStore({
  reducer: {
    rentals: rentalReducer,
  },
});

export default store;
