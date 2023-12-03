import { createSlice } from "@reduxjs/toolkit";

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
      console.log(action.payload);
      state.todos.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        category: action.payload.category || "",
        deadline: action.payload.deadline || "",
        completed: action.payload.completed || false,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((task) => task.id !== id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const toggleTodo = state.todos.find((task) => task.id === id);
      toggleTodo.completed = !toggleTodo.completed;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const getTodos = (state) => state.todos.todos;

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
