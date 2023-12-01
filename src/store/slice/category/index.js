import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: null,
      title: "",
      description: "",
    },
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    createCategory: (state, action) => {
      const { id, title, description } = action.payload;
      state.categories.push({
        id: id || null,
        title: title || "",
        description: description || "",
      });
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    deleteCategory: (state, action) => {
      const { id } = action.payload;
      state.categories.filter((category) => category.id !== id);
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
  },
});

export const getCategories = (state) => state.categories.categories;
export const { createCategory, deleteCategory, toggleTodo } =
  categorySlice.actions;
export default categorySlice.reducer;
