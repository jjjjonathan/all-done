import { useState } from 'react';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Todo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="text-2xl inline ">
      <i
        id="todo-checkbox"
        className={`bi ${checked ? 'bi-check-square-fill' : 'bi-square'} pr-3`}
        onClick={() => setChecked(!checked)}
      ></i>
      <EditText id="todo-text" defaultValue="Walk the dog" />
    </div>
  );
};

export default Todo;
