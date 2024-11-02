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
      state.todo = [...state.todo.filter((item) => item.id != action.payload)];
    },
    updateTodo: (state: TodoInitial, action: PayloadAction<Todo>) => {
      //   let data =  state.todo.filter((item: Todo) =>
      //       item.id == action.payload.id
      //     )
      //     console.log(data);
      console.log(action.payload.id);
      state.todo = state.todo.filter((item) => {
        if (item.id == action.payload.id) {
        }
      });
    },
  },
});

export const { todoAdded, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
