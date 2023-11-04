import { apiSlice } from "store/api";

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTodo: builder.mutation({
      query: (credentials) => ({
        url: "/todo/add",
        method: "POST",
        body: { credentials },
      }),
    }),
    removeTodo: builder.mutation({
      query: (credentials) => ({
        url: "/todo/remove",
        method: "DELETE",
        body: { credentials },
      }),
    }),
    toggleTodo: builder.mutation({
      query: (credentials) => ({
        url: "/todo/toggle",
        method: "POST",
        body: { credentials },
      }),
    }),
  }),
});

export const {
  useAddTodoMutation,
  useRemoveTodoMutation,
  useToggleTodoMutation,
} = todosApiSlice;
