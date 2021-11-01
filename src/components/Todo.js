import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Todo = ({ id, index }) => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState('Walk the dog');

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className="text-2xl flex items-center"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="pr-3">
            <i
              id="todo-checkbox"
              className={`bi ${checked ? 'bi-check-square-fill' : 'bi-square'}`}
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
          <div>
            <i className="bi bi-grip-vertical"></i>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
