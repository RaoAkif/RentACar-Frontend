import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const createSlice = () => createSlice({
    name: "reservation",
    initialState: {
        reservation: [],
        },
        extraReducers: (builder) => {}
    },
);

export default createSlice().reducer;