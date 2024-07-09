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
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id,
      );

      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
  },
});

export default todosSlice.reducer;

export const {addTodo, removeTodo, updateTodo} = todosSlice.actions;
