import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const cacheTodos = JSON.parse(localStorage.getItem("todos"));
console.log(cacheTodos);
const initialState = {
  todos: cacheTodos || [],
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.todos.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        category: action.payload.category && "",
        deadline: action.payload.deadline && "",
        completed: action.payload.completed && false,
        userid: cookies.get("id"),
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
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

export const getTodos = (state) => state.todos.todos;

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
