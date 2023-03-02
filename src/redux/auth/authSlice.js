import { createSlice } from '@reduxjs/toolkit';
import {
  logOutRequest,
  refreshUser,
  userLogin,
  userRegister,
} from './authOperations';

const initialState = {
  token: null,
  isLoading: false,
  error: null,
  email: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.email = action.payload.user.email;
        console.log(state.email);
        console.log(action.payload);
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userRegister.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ----- Get current user -----
      .addCase(refreshUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ----- Logout -----
      .addCase(logOutRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logOutRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = null;
        state.error = null;
      })
      .addCase(logOutRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
