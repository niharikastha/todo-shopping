export const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const isCompleted = todo.completed || false;

  return (
    <div>
      <div style={{padding: '20px'}}>
        <h4 style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
          {todo.title}
        </h4>
        <p>{todo.desc}</p>
        <br />
        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo); }}>
          Delete
        </button>

        {/* Add margin to the Mark as Complete button */}
        <button
          className="btn btn-sm btn-primary"
          style={{ marginLeft: '5px' }}
          onClick={() => {onToggleComplete(todo);}}
        >
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
