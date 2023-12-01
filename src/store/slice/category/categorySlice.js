import { apiSlice } from "store/api";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (credentials) => ({
        url: "/category/create",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    removeTodo: builder.mutation({
      query: (credentials) => ({
        url: "/category/delete",
        method: "DELETE",
        body: { ...credentials },
      }),
    }),
    getCategory: builder.mutation({
      query: (credentials) => ({
        url: "/get/category",
        method: "GET",
      }),
    }),
    changeCategory: builder.mutation({
      query: (credentials) => ({
        url: "/get/category",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useRemoveTodoMutation,
  useChangeCategoryMutation,
  useGetCategoryMutation,
} = categoryApiSlice;
