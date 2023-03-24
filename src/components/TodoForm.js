import React from 'react'

export default function TodoForm() {
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
      />
      <buuton type="submit" className="todo-btn"> Add Task</buuton>
    </form>
  );
}
