export const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const isCompleted = todo.completed || false;

  return (
    <div>
      <div>
        <h4 style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
          {todo.title}
        </h4>
        <p>{todo.desc}</p>
        <p>{String(todo.completed)}</p> {/* Convert todo.completed to a string */}

        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo); }}>
          Delete
        </button>
        <button className="btn btn-sm btn-primary" onClick={() => {onToggleComplete(todo);}}>
          {isCompleted ? 'Undo Complete' : 'Mark Complete'}
        </button>
        {isCompleted && (
          <span style={{ marginLeft: '5px', color: 'green' }}>&#10004;</span>
        )}
      </div>
      <hr />
    </div>
  );
};