import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://rent-a-car-bk.herokuapp.com/api/v1';

const showDialog = (text) => {
  const dialog = document.createElement('div');
  const authPage = document.querySelector('.form-group');
  dialog.classList.add('show');
  dialog.innerHTML = `<p>${text}</p>`;
  authPage.appendChild(dialog);
  setTimeout(() => {
    dialog.remove();
  }, 5000);
};

export const signinUser = createAsyncThunk('user/signinUser', async (name) => {
  const { data } = await axios.post(`${baseUrl}/sign_in`, { name });
  localStorage.setItem('user', JSON.stringify({ id: data.id, name: data.name }));
  return data;
});

export const createUser = createAsyncThunk('user/createUser', async (name) => {
  const { data } = await axios.post(`${baseUrl}/users`, { name });
  localStorage.setItem('user', JSON.stringify({ id: data.id, name: data.name }));
  return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: {
    [signinUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      window.location.href = '/';
    },
    [signinUser.rejected]: () => {
      showDialog('User not found');
    },
    [createUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      window.location.href = '/';
    },
    [createUser.rejected]: () => {
      showDialog('User already exists');
    },
  },
});

export default userSlice.reducer;
