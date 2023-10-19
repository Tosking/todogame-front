import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user:{},
  isLogged:false
}
//Если необходимо поработать со страницами, то измените на true isLogged
export const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    login(state,action){
      state.user = action.payload
      state.isLogged = true
      console.log("Work");
    }
  }
})
//TODO: Добавить reducer регистрации.
export const {login} = authSlice.actions
export default authSlice.reducer