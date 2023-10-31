import { createSlice } from "@reduxjs/toolkit"
import Cookies from "universal-cookie"
const cookies = new Cookies()



const initialState ={
    user:{
        id:cookies.get('id'),
        login:cookies.get('login') ??null,
        accessToken:cookies.get('accessToken')??null
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { login, accessToken } = action.payload
            state.user.login = login
            state.user.accessToken = accessToken
        },
        logOut: (state, action) => {
            console.log("work");
            state.user.login = null
            state.user.accessToken = null
            cookies.remove('id')
            cookies.remove('login')
            cookies.remove('accessToken')
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user.login
export const selectCurrentToken = (state) => state.auth.user.accessToken