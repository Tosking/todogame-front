import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "utils/axios";


export const registerUser = createAsyncThunk(
  'auth/signup',
  async (data,{rejectWithValue})=>{
    try {
      console.log("Data: ",data);
      const user = await instance.post('/auth/signup',data)
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
  'auth/signin',
  async (data,{rejectWithValue})=>{
 
    try {
    
      const user = await instance.post('/auth/signin',data)
      
      return user.data;
      
    } catch (error) {
        if(error.response && error.response.data.message){
          console.log("Exception: ");
          return rejectWithValue(error.response.data.message)
        }
        else
         return rejectWithValue(error.message)
    }
  }
) 