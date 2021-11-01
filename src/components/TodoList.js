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
            <Todo id="first" index={0} />
            <Todo id="second" index={1} />
            <Todo id="third" index={2} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
