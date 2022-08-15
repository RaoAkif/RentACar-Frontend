import { configureStore } from '@reduxjs/toolkit';
import rentalsReducer from './rental/rentalsReducer';

const store = configureStore({
  reducer: {
    rentals: rentalsReducer,
  },
});

export default store;
