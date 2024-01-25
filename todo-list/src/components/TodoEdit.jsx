import { useState } from "react";
import React from "react";


const TodoEdit = ({textToBeEdited, handleChange, handleTextEdit}) => {
  return (
    <div className="todo-edit">
      <input type="text" value={textToBeEdited} onChange={handleChange} />
      <button onClick={handleTextEdit}>Edit</button>
    </div>
  );
};

export default TodoEdit;