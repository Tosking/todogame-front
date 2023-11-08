import { apiSlice } from "store/api";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    changeName: builder.mutation({
      query: (credentials) => ({
        url: "/user/changename",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    changeEmail: builder.mutation({
      query: (credentials) => ({
        url: "/user/changeemail",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    changePassword: builder.mutation({
      query: (credentials) => ({
        url: "/user/changepass",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    changeTheme: builder.mutation({
      query: (credentials) => ({
        url: "/user/changetheme",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useChangeEmailMutation,
  useChangePasswordMutation,
  useChangeNameMutation,
  useChangeThemeMutation,
} = userApiSlice;
