import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoInitial } from "../../types/types";

const initialState: TodoInitial = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded: (state: TodoInitial, action: PayloadAction<Todo>) => {
      state.todo = [...state.todo, action.payload];
    },
    deleteTodo: (state: TodoInitial, action: PayloadAction<number>) => {
      state.todo = [
        ...state.todo.filter((item: Todo) => item.id != action.payload),
      ];
    },
    updateTodo: (state: TodoInitial, action: PayloadAction<Todo>) => {
      state.todo = [
        ...state.todo.map((item: Todo) =>
          item.id == action.payload.id ? action.payload : item
        ),
      ];
    },
  },
});

export const { todoAdded, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
