import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Default Todo", status: false }],
};

export const todoSlice = createSlice({
  name: "Superman",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        // paylod khud ek object hota hain vese.
      };
      state.todos.push(todo);
      // yai hamare har ek todo ko hamare state main bhejega.
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
// inko hamne idivisually isliye export kiya hain quki yai hame hamare components main kaam aaten han.

export default todoSlice.reducer;
// Aur yai isliye ki hame yai store ko bata padta hain.
