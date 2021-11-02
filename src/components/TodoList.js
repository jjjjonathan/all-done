import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Walk the dog',
      checked: false,
      id: '7f2j48',
    },
    {
      text: 'Wash dishes',
      checked: false,
      id: '482jfs',
    },
    {
      text: 'Call Debra',
      checked: false,
      id: '84jd2n',
    },
  ]);

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const nextState = [...todos];

    const [draggedTodo] = nextState.splice(source.index, 1);
    nextState.splice(destination.index, 0, draggedTodo);

    setTodos(nextState);
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
