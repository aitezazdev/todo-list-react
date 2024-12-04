import React, { useContext } from "react";
import Todo from "./Todo";
import { myContext } from "../Context/Context";

const Todos = () => {
  const { todos, editTodo, deleteTodo } = useContext(myContext);

  return (
    todos.length > 0 && <div className="mt-5 py-1 rounded-lg">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} onEdit={(newTodo) => editTodo(index, newTodo)} onDelete={() => deleteTodo(index)}  />
      ))}
    </div>
  );
};

export default Todos;
