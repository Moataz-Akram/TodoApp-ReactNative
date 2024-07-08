import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
}

export function createTodo(title: string, description: string): Todo {
  return {
    id: Date.now(),
    title,
    description,
    isDone: false,
  };
}
