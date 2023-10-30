import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./thunk/auth"
import authReducer from "./slice/auth"


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})