import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosInstance';

export const register = createAsyncThunk(
  'auth/register',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/api/auth/register', { username, password });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Use rejectWithValue to pass error data
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/api/auth/login', { username, password });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Use rejectWithValue to pass error data
    }
  }
);
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/auth/profile');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axiosInstance.get('/api/auth/logout');
      return true; // Or some other success indication
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Use rejectWithValue to pass error data
    }
  }
);
