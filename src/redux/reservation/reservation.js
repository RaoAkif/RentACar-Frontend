import { createSlice } from '@reduxjs/toolkit';

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservation: [],
  },
  extraReducers: {},
});

export default reservationSlice.reducer;
