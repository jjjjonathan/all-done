import { useDispatch } from 'react-redux';
import { toggleChecked, editText } from '../features/todos/todosSlice';
import { Draggable } from 'react-beautiful-dnd';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Todo = ({ id, index, text, checked }) => {
  const dispatch = useDispatch();

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
              className={`bi ${checked ? 'bi-check-square-fill' : 'bi-square'}`}
              onClick={() => dispatch(toggleChecked(id))}
            ></i>
          </div>
          <div className="w-full">
            <EditText
              value={text}
              onChange={(changedValue) =>
                dispatch(editText({ id, text: changedValue }))
              }
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
