import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
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
  },
});

export const { toggleChecked } = todosSlice.actions;

export default todosSlice.reducer;
