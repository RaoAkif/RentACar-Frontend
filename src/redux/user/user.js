import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1';

const showDialog = () => {
  const dialog = document.createElement('dialog');
  const authPage = document.querySelector('.auth-page');
  dialog.classList.add('dialog');
  dialog.innerHTML = 'User does not exist';
  authPage.appendChild(dialog);
  dialog.showModal();
  setTimeout(() => {
    dialog.close();
  }, 2000);
};

export const signinUser = createAsyncThunk('user/signinUser', async (name) => {
  const { data } = await axios.post(`${baseUrl}/sign_in`, { name });
  localStorage.setItem('user', JSON.stringify(data.name));
  return data;
});

export const createUser = createAsyncThunk('user/createUser', async (name) => {
  const { data } = await axios.post(`${baseUrl}/users`, { name });
  localStorage.setItem('user', JSON.stringify(data.name));
  return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [signinUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
      window.location.href = '/';
    },
    [signinUser.rejected]: () => {
      showDialog();
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    },
    [createUser.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export default userSlice.reducer;
