import React, { useState } from "react";
import "./todo.css";
import { FaTrash } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { deleteTodo } from "../Redux/feature/todoSlice";
import { FaCheck } from "react-icons/fa";
import TodoLi from "./TodoLi";

const TodoList = () => {
  const { todo } = useSelector((state: RootState) => state.todo);
  // console.log(todo);
  
  return (
    <ul>
      {todo && todo.map((item) => <TodoLi key={item.id} todoItem={item} />)}
    </ul>
  );
};

export default TodoList;
