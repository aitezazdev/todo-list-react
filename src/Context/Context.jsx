import React, { createContext, useState } from "react";

export const myContext = createContext();

const Context = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const editTodo = (index, newTodo) => {
    setTodos((prev) =>
      prev.map((todo, i) => (i === index ? newTodo : todo))
    );
  };

  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };
  

  return (
    <myContext.Provider
      value={{ todos, setTodos, addTodo, editTodo, deleteTodo }}
    >
      {children}
    </myContext.Provider>
  );
};

export default Context;
