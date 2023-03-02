import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData, login, logOut } from './loginApi';
import { register, token } from './loginApi';

export const userRegister = createAsyncThunk(
  'user/userRegister',
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const response = await register(data);
      token.set(response.token, 'Bearer');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'user/userLogin',
  async (data, thunkAPI) => {
    try {
      const response = await login(data);
      token.set(response.token, 'Bearer');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
      const { token: savedToken } = thunkAPI.getState().auth;
      if (!savedToken) return thunkAPI.rejectWithValue('no token');
      token.set(savedToken);
      const response = await getUserData();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutRequest = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const { token: savedToken } = thunkAPI.getState().auth;
      token.unSet(savedToken);
      const response = await logOut();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
