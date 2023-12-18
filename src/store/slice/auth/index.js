import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const accessToken = localStorage.getItem("accessToken") || null;

const initialState = {
  user: {
    id: cookies.get("id"),
    login: cookies.get("login") ?? null,
    accessToken,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { login, accessToken } = action.payload;
      state.user.login = login ?? state.user.login;
      state.user.accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
    },
    logOut: (state, action) => {
      localStorage.clear();
      state.user.login = null;
      state.user.accessToken = null;
    },
		changeName:(state, action) => {
			const {login} = action.payload;
			state.user.login = login;
		},
  },
});

export const { setCredentials, logOut, changeName } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user.login;
export const selectCurrentToken = (state) => state.auth.user.accessToken;
