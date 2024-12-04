import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { myContext } from "../Context/Context";

const TodoForm = () => {
  const { addTodo } = useContext(myContext);
  const { register, handleSubmit, reset, formState : {errors} } = useForm();

  const onSubmit = (data) => {
    addTodo(data.todo);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center gap-2">
        <input
          {...register("todo", { required: "Plz Enter a Todo" })}
          className="flex-grow px-2 py-2 border outline-none rounded-md ring-1 ring-gray-300 focus:ring-blue-400"
          type="text" autoComplete="off" spellCheck="false"
          placeholder="Add Todo"
        />
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
          Add Todo
        </button>
      </div>
      {errors.todo && (
        <p className="text-red-500 text-sm mt-1.5">{errors.todo.message}</p>
      )}
    </form>
  );
};

export default TodoForm;
