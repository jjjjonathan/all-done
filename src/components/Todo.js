import { useState } from 'react';

const Todo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="text-2xl">
      <p id="todo-text">
        <i
          id="todo-checkbox"
          className={`bi ${
            checked ? 'bi-check-square-fill' : 'bi-square'
          } pr-3`}
          onClick={() => setChecked(!checked)}
        ></i>
        Walk the dog
      </p>
    </div>
  );
};

export default Todo;
