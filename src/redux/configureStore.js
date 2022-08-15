import { configureStore } from '@reduxjs/toolkit';
import rental from './rental/rentalsReducer';

const store = configureStore({
  reducer: {
    rental,
  },
});

export default store;
