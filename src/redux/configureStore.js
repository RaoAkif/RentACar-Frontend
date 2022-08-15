import { configureStore } from '@reduxjs/toolkit';
import car from './car/car';
import reservation from './reservation/reservation';
import user from './user/user';

const store = configureStore({
    reducer: {
        car,
        reservation,
        user,
    },
});

export default store;
