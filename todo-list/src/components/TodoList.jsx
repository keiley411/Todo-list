import React from "react";
import Todo from "./Todo";
import { useState } from "react";

const TodoList = ({todos, onDelete, onEdit}) => {

  return <div>
    {
        todos.map((todoData) => {
            return <Todo data={todoData} onDelete={onDelete} />
            return <Todo data={todoData} onEdit={onEdit} />
        })
    }
  </div>;
};

export default TodoList;