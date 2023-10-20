import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "utils/axios";


export const registerUser = createAsyncThunk(
  'auth/register',
  async (data,{rejectWithValue})=>{
    try {
      const user = await instance.post('/auth/register',data)
      return user.data;
      
    } catch (error) {
        if(error.response && error.response.data.message){
          return rejectWithValue(error.response.data.message)
        }
        else
         return rejectWithValue(error.message)
    }
  }
) 
export const loginUser = createAsyncThunk(
  'auth/login',
  async (data,{rejectWithValue})=>{
    try {
      const user = await instance.post('/auth/login',data)
      return user.data;
      
    } catch (error) {
        if(error.response && error.response.data.message){
          return rejectWithValue(error.response.data.message)
        }
        else
         return rejectWithValue(error.message)
    }
  }
) 