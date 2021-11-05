import { useSelector, useDispatch } from 'react-redux';
import { reorder } from '../reducers/todosSlice';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Todo from './Todo';
import NewTodo from './NewTodo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    dispatch(
      reorder({
        sourceIndex: source.index,
        destinationIndex: destination.index,
      }),
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <div
            className="todos"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.map(({ id, text, checked }, index) => (
              <Todo
                key={id}
                id={id}
                index={index}
                text={text}
                checked={checked}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <NewTodo />
    </DragDropContext>
  );
};

export default TodoList;
