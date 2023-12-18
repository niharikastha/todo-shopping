import React from 'react';
import { TodoItem } from './TodoItem'; 
import './Todos.css'; 

export const Todos = ({ todos, onDelete, onToggleComplete }) => {

  // Calculate the total number of tasks and completed tasks
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;

  let myStyle = {
    minHeight: '70vh',
    margin: '40px auto',
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3><br/>

      {/* Display the total number of tasks and completed tasks */}
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>

      {/* message if there are no todos */}
      {totalTasks === 0 ? (
        'No Todos to display'
      ) : (
        // Map through the todos array
        todos.map((todo) => (
          <TodoItem
            todo={todo} // Pass the todo object to TodoItem
            key={todo.sno} // Use todo.sno for unique identification
            onDelete={onDelete} // Pass the onDelete function to handle todo deletion
            onToggleComplete={onToggleComplete} // Pass the onToggleComplete function to handle completion status
          />
        ))
      )}
    </div>
  );
};
