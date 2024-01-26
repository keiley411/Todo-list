import React from "react";
import Todo from "./Todo";
import { useState } from "react";
import "./TodoList.css"

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div className="lists">
      {todos.map((todoData) => {
        return <Todo data={todoData} onDelete={onDelete} onEdit={onEdit} key={todoData.id} />;
      })}
    </div>
  );
};

export default TodoList;
