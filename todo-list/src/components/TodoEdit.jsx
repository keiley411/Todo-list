import { useState } from "react";
import React from "react";
import TodoEdit from './TodoEdit'

const TodoEdit = ({onEdit}) => {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function handleClick(event) {
    onEdit(inputValue);
    setInputValue("")
  }
  return (
    <div className="todo-edit">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Edit</button>
    </div>
  );
};

export default TodoEdit;