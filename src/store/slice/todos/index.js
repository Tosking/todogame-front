import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: null,
      title: "",
      description: "",
      category: "",
      deadline: "",
      completed: false,
      userid: null,
    },
  ],
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    removeTodo: (state, action) => {},
    toggleTodo: (state, action) => {},
  },
});
export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
