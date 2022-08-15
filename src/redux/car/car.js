import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const createSlice = () => createSlice({
    name: "cars",
    initialState: {
        cars: [],
        },
        extraReducers: (builder) => {}
    },
);

export default createSlice().reducer;