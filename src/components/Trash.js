import { Droppable } from 'react-beautiful-dnd';

const Trash = () => {
  return (
    <Droppable droppableId="trash">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
          {...provided.droppableProps}
        >
          TRASHCAN
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Trash;
