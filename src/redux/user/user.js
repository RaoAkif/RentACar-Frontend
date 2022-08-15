import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
    },
    reducers: {},
    extraReducers: {},
});

export default userSlice.reducer;