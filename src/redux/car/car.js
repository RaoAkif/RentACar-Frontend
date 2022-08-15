import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
  },
  extraReducers: {},
});

export default carSlice.reducer;
