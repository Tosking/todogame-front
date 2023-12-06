import { apiSlice } from "store/api";

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTodo: builder.mutation({
      query: (credentials) => ({
        url: "/task/create",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    removeTodo: builder.mutation({
      query: (credentials) => ({
        url: "/task/delete",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    toggleTodo: builder.mutation({
      query: (credentials) => ({
        url: "/todo/toggle",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useAddTodoMutation,
  useRemoveTodoMutation,
  useToggleTodoMutation,
} = todosApiSlice;
