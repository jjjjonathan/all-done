import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Todo from './Todo';

const TodoList = () => {
  return (
    <DragDropContext>
      <Droppable droppableId="todos">
        {(provided) => (
          <div
            className="todos"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Todo />
            <Todo />
            <Todo />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
