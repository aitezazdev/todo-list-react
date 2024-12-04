import React, { useState } from "react";

const Todo = ({ todo, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEdited, setIsEdited] = useState(todo);
  const [checked, setChecked] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(isEdited);
    }
    setIsEditing(!isEditing);
  }

  return (
    <div className="my-2 bg-lime-50 rounded-md py-1 pl-2 pr-1 flex items-center">
      <input checked={checked} onChange={() => setChecked(!checked)} type="checkbox" className="mx-2 mt-1" />
      {isEditing ? (
        <input
          value={isEdited}
          onChange={(e) => setIsEdited(e.target.value)}
          className="flex-grow px-2 py-0.5 border outline-none rounded-md ring-1 ring-gray-300 focus:ring-blue-400"
          type="text"
        />
      ) : (
        <p  className={`flex-grow ${checked ? "line-through text-zinc-600" : ""}`}>{todo}</p>
      )}
      <button onClick={handleEdit} className="px-3 outline-none py-1 rounded-md bg-green-500 text-white text-sm mx-1">
      {isEditing ? "Save" : "Edit"}
      </button>
      <button disabled={isEditing} onClick={!isEditing && onDelete} className={`px-3 outline-none py-1 rounded-md bg-red-500 text-white text-sm ${isEditing && "opacity-50 cursor-not-allowed"}`}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
