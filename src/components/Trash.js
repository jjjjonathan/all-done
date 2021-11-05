import { Droppable } from 'react-beautiful-dnd';
import styles from './Trash.module.css';

const Trash = () => {
  return (
    <Droppable droppableId="trash">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className={`text-center  mt-10 ${
            snapshot.isDraggingOver ? 'bg-red-200' : 'bg-gray-200'
          }`}
          {...provided.droppableProps}
        >
          <i
            className={
              !snapshot.isDraggingOver && 'bi bi-trash-fill text-gray-500'
            }
          ></i>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Trash;
