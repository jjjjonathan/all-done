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

  return (
    <DragDropContext>
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
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
