import React, { useState } from "react";
import "./todo.css";
import { useDispatch } from "react-redux";
import { Todo } from "../types/types";
import { todoAdded } from "../Redux/feature/todoSlice";

const TodoForm = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const getAddedTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      alert("todonu doldurun ");
      return;
    }
    const payload: Todo = {
      id: Math.floor(Math.random() * 99999999),
      content: todo,
    };
    dispatch(todoAdded(payload));
    setTodo("");
  };

  return (
    <form action="#">
      <h1>Todo Project</h1>
      <div className="homeTodo">
        <input
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
          placeholder="Todo daxil edin"
          type="text"
        />
        <button onClick={getAddedTodo}>Added</button>
      </div>
    </form>
  );
};

export default TodoForm;
