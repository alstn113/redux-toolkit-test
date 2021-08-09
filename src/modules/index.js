import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/counter";
import todosReducer from "../modules/todos";
import sampleReducer from "../modules/sample";

export const store = configureStore({
  reducer: { counter: counterReducer, todos: todosReducer, sample: sampleReducer },
});
