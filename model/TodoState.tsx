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
      console.log('before pushing: ', state.todos);

      state.todos.push(action.payload);

      console.log('after pushing: ', state.todos);
    },
    // add reducers
  },
});

export default todosSlice.reducer;

export const {addTodo} = todosSlice.actions;
