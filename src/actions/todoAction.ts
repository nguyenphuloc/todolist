import { createAction } from '@reduxjs/toolkit';
import { ItemTodoState } from '../models/todo';

export const listTodoSuccess = createAction<{}>('todo/listTodoSuccess');
export const listTodoAction = createAction('todo/listTodoAction');
export const updateTodoAction = createAction('todo/updateTodoAction', function prepare(payload, callback) {
    return {
      payload: {
        name: payload.name,
        _id: payload._id,
        callback
      },
    }
});
export const addTodoAction = createAction<ItemTodoState>('todo/addTodoAction');
export const deleteTodoAction = createAction<ItemTodoState>('todo/deleteTodoAction');
export const todoFailure = createAction('todo/todoFailure');