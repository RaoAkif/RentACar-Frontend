import { configureStore } from '@reduxjs/toolkit';
import carReducer from './car/carSlice';
import reservationReducer from './reservation/reservationSlice';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
    reservation: reservationReducer,
  },
});

export default store;
