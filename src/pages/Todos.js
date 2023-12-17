import React from 'react';
import { TodoItem } from './TodoItem'; // Import the TodoItem component
import './Todos.css';

export const Todos = ({ todos, onDelete, onToggleComplete }) => {
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;

  let myStyle = {
    minHeight: '70vh',
    margin: '40px auto',
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      {totalTasks === 0 ? (
        'No Todos to display'
      ) : (
        todos.map((todo) => (
          <TodoItem
            todo={todo} // Pass individual todo item
            key={todo.sno} // Use todo.sno as the key
            onDelete={onDelete}
            onToggleComplete={onToggleComplete} // Pass the completion toggle function
          />
        ))
      )}
    </div>
  );
};