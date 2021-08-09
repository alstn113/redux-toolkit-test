import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  todos: [],
};
let id = 1;

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    changeInput: (state, { payload: input }) => {
      state.input = input;
    },
    insert: (state, { payload: text }) => {
      const todo = {
        id: id++,
        text,
        done: false,
      };
      state.todos.push(todo);
    },
    toggle: (state, { payload: id }) => {
      const todo = state.todos.find((todo) => todo.id === id);
      todo.done = !todo.done;
    },
    remove: (state, { payload: id }) => {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { changeInput, insert, toggle, remove } = todosSlice.actions;

export default todosSlice.reducer;
