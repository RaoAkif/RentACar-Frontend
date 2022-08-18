import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
  },
  extraReducers: {},
});

export default carSlice.reducer;
