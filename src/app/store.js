import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../reducers/todosSlice';
import { compose } from 'redux';
import persistState from 'redux-localstorage';

const options = {
  key: 'allDone',
};

const enhancer = compose(persistState(undefined, options));

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
  enhancers: [enhancer],
});
