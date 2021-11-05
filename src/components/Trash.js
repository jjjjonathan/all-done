import { Droppable } from 'react-beautiful-dnd';
import styles from './Trash.module.css';

const Trash = () => {
  return (
    <Droppable droppableId="trash">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className={`text-center ${snapshot.isDraggingOver && 'bg-red-100'}`}
          {...provided.droppableProps}
        >
          <i className={`bi bi-trash-fill text-red-500 ${styles.trashcan}`}></i>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Trash;
