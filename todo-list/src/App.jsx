import { useState } from "react";
import TodoAdder from "./components/TodoAdder";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";
import "./App.css"
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Nelly is Visiting",
      completed: false,
      deleted: false,
    },
    {
      id: 2,
      title: "Washing dishes",
      completed: false,
      deleted: false,
    },
  ]);

  function handleAdd(inputText) {
    console.log(inputText);
    let newId = 1;
    if(todos.length > 0) {
      newId = todos.length + 1;
    }
    const newTodo = {
      id: newId,
      title: inputText,
      completed: false,
      deleted: false,
    };
    setTodos([...todos, newTodo])
  }

  function handleDelete(id){
    console.log(id)
    const todosWithoutDeleted = todos.filter((todo) => todo.id !== id);
    setTodos(todosWithoutDeleted);
  }

  function handleEdit(id){
    console.log(id);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updatedTodos };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <div className="app">
      <h1>TO DO LIST</h1>
      <TodoAdder onAdd={handleAdd} />
      <TodoList todos={todos}  onDelete={handleDelete}/>
      <TodoEdit todos={todos} onEdit={handleEdit}/>
    </div>
  );


  
}

export default App;