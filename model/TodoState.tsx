import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo} from './Todo';

interface State {
  todos: Todo[];
}

const initialState: State = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      // remove action
      state.todos.filter(todo => todo.id !== action.payload);
    },
    // add reducers
  },
});

export default todosSlice.reducer;

export const {addTodo} = todosSlice.actions;
