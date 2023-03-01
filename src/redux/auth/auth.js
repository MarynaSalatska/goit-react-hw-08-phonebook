import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./loginApi";
import { register, token } from "./registerApi";

export const userRegister = createAsyncThunk(
  'user/userRegister',
  async (data, thunkAPI) => {
    console.log(data)
    try {
      const response = await register(data);
      thunkAPI.dispatch(
        userLogin({ email: data.email, password: data.password })
      );
    // console.log(response);
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
       token.set(response.access_token, response.token_type);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);