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
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((task) => task.id !== id);
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const toggleTodo = state.todos.find((task) => task.id === id);
      toggleTodo.completed = !toggleTodo.completed;
    },
  },
});
export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
