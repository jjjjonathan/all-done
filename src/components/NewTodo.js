import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../features/todos/todosSlice';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import styles from './NewTodo.module.css';

const NewTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <div className="text-2xl flex items-center text-gray-300">
      <div className="pr-3">
        <i className="bi bi-plus-circle-fill"></i>
      </div>
      <div className="w-full">
        <EditText
          className={styles.newTodoText}
          placeholder="New Todo"
          value={text}
          onChange={(changedValue) => setText(changedValue)}
          onSave={() => {
            dispatch(add(text));
            setText('');
          }}
        />
      </div>
    </div>
  );
};

export default NewTodo;
