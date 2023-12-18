

// single todo item in the todo list
export const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  // To check if the todo item is completed
  const isCompleted = todo.completed || false;

  return (
    <div>
      <div style={{ padding: '20px' }}>

        {/* Display the title of the todo with or without line */}
        <h4 style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
          {todo.title}
        </h4>
        
        {/*Description of the todo */}
        <p>{todo.desc}</p>
        <br />

        {/* Button to Delete */}
        <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo);}}>
          Delete
        </button>

        {/* Button to toggle the completion status*/}
        <button className="btn btn-sm btn-primary" style={{ marginLeft: '5px' }}onClick={() => {onToggleComplete(todo);}}>

          {/* Display text based on completion status */}
          {isCompleted ? 'Undo Complete' : 'Mark Complete'}
          
        </button>

        {/* Display a checkmark symbol if the todo item is completed */}
        {isCompleted && (
          <span style={{ marginLeft: '5px', color: 'green' }}>&#10004;</span>
        )}
      </div>
      <hr />
    </div>
  );
};
