import { createAction } from '@reduxjs/toolkit';
import { ItemTodoState } from '../models/todo';

export const listTodoSuccess = createAction<{}>('todo/listTodoSuccess');
export const listTodoAction = createAction('todo/listTodoAction');
export const getTodoSuccess = createAction<{}>('todo/getTodoSuccess');
export const getTodoAction = createAction<ItemTodoState>('todo/getTodoAction');
export const updateTodoAction = createAction<ItemTodoState>('todo/updateTodoAction');
export const addTodoAction = createAction<ItemTodoState>('todo/addTodoAction');
export const deleteTodoAction = createAction<ItemTodoState>('todo/deleteTodoAction');
export const todoFailure = createAction('todo/todoFailure');