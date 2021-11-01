import { useState } from 'react';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Todo = () => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState('Walk the dog');

  return (
    <div className="text-2xl flex items-center">
      <div>
        <i
          id="todo-checkbox"
          className={`bi ${
            checked ? 'bi-check-square-fill' : 'bi-square'
          } pr-3`}
          onClick={() => setChecked(!checked)}
        ></i>
      </div>
      <div className="w-full">
        <EditText
          id="todo-text"
          value={text}
          onChange={(changedValue) => setText(changedValue)}
        />
      </div>
    </div>
  );
};

export default Todo;
