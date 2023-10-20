import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "store/thunk/auth";

//TODO: Дописать 
const initialState = {
  user:{
    id:'',
    
  },
  isLogged:true,
  isLoading:false
}
//Если необходимо поработать со страницами, то измените на true isLogged
export const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
        builder.addCase(loginUser.pending, (state, action) => {
          state.isLogged = false
          state.isLoading = true
      })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLogged = false
            state.isLoading = true
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
  }
})
//TODO: Добавить reducer регистрации.
export default authSlice.reducer