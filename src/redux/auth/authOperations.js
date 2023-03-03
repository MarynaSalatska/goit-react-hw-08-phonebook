import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData, login, logOut } from './loginApi';
import { register, token } from './loginApi';

export const userRegister = createAsyncThunk(
  'user/userRegister',
  async (data, thunkAPI) => {
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
// export const getCurrentUserRequest = createAsyncThunk(
//   'user/getCurrent',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const persistToken = getState().auth.token;
//       if (!persistToken) return rejectWithValue('No token');
//       token.set(persistToken, 'Bearer');
//       const response = await getUserDetailsRequest();
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


export const logOutRequest = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const { token: savedToken } = thunkAPI.getState().auth;
      const response = await logOut();
      token.unSet(savedToken);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
