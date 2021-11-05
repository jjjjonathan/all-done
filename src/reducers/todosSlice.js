import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      text: 'Walk the dog',
      checked: false,
      id: nanoid(),
    },
    {
      text: 'Wash dishes',
      checked: false,
      id: nanoid(),
    },
    {
      text: 'Call mom',
      checked: false,
      id: nanoid(),
    },
  ],
  reducers: {
    toggleChecked: (state, action) => {
      // Payload is id of todo to toggle
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
    },
    reorder: (state, action) => {
      const [draggedTodo] = state.splice(action.payload.sourceIndex, 1);
      state.splice(action.payload.destinationIndex, 0, draggedTodo);
    },
    editText: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text };
        }
        return todo;
      });
    },
    add: (state, action) => {
      // Payload is text of new todo
      state.push({
        text: action.payload,
        checked: false,
        id: nanoid(),
      });
    },
    remove: (state, action) => {
      // Payload is id of todo to remove
      const index = state.findIndex((e) => e.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { toggleChecked, reorder, editText, add, remove } =
  todosSlice.actions;

export default todosSlice.reducer;
