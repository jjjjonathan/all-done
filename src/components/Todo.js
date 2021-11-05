import { useDispatch } from 'react-redux';
import { toggleChecked, editText } from '../reducers/todosSlice';
import { Draggable } from 'react-beautiful-dnd';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import styles from './Todo.module.css';

const Todo = ({ id, index, text, checked }) => {
  const dispatch = useDispatch();

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className="flex items-center"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="pr-3">
            <i
              className={`bi text-2xl ${
                checked ? 'bi-check-square-fill' : 'bi-square'
              }`}
              onClick={() => dispatch(toggleChecked(id))}
            ></i>
          </div>
          <div className="w-full">
            <EditText
              className={styles.todoText}
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
