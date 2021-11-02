import { useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const nextState = [...todos];

    const [draggedTodo] = nextState.splice(source.index, 1);
    nextState.splice(destination.index, 0, draggedTodo);

    // setTodos(nextState);
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
    </DragDropContext>
  );
};

export default TodoList;
