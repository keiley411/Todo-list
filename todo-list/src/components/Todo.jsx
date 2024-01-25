import React from 'react'
import "./Todo.css"

function Todo({ data, onDelete, onEdit }) {
    console.log('Todo Component ', data.title)

  return (
    <div className='todo'>
        <p>{data.title}</p>
        <button onClick={() => onDelete(data.id)}>Delete</button>
        <button onClick={() => onEdit({id:data.id, title: data.title})}>Edit</button>
    </div>
  )
}

export default Todo;