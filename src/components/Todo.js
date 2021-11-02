import { Draggable } from 'react-beautiful-dnd';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Todo = ({ id, index, text, checked }) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className="text-2xl flex items-center"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="pr-3">
            <i
              id="todo-checkbox"
              className={`bi ${checked ? 'bi-check-square-fill' : 'bi-square'}`}
              // onClick={() => setChecked(!checked)}
            ></i>
          </div>
          <div className="w-full">
            <EditText
              id="todo-text"
              value={text}
              // onChange={(changedValue) => setText(changedValue)}
            />
          </div>
          <div>
            <i
              className="bi bi-grip-vertical"
              {...provided.dragHandleProps}
            ></i>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
