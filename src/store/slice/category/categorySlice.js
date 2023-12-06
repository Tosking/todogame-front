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
    removeCategory: builder.mutation({
      query: (credentials) => ({
        url: "/category/delete",
        method: "POST",
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
  useRemoveCategoryMutation,
  useChangeCategoryMutation,
  useGetCategoryMutation,
} = categoryApiSlice;
