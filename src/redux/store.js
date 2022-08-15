import { configureStore } from '@reduxjs/toolkit';
import carReducer from './car/car';
import reservationReducer from './reservation/reservation';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
    reservation: reservationReducer,
  },
});

export default store;
