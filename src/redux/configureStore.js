import { configureStore } from '@reduxjs/toolkit';
import rental from './rental/rentalsReducer';
import user from './user/user';

const store = configureStore({
  reducer: {
    rental,
    user,
  },
});

export default store;
