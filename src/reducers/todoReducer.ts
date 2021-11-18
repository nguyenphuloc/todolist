import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../src/store/store';
import { TodoState } from '../models/todo';
import { listTodoSuccess, getTodoSuccess } from '../actions/todoAction';

const initialState: TodoState = {
    listTodo: [],
    status: 'idle',
    getDetail: {}
};

const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(listTodoSuccess, (state, action: { payload: any }) => {
            state.listTodo = action.payload || [];
        })
        .addCase(getTodoSuccess, (state, action: { payload: any }) => {
            state.getDetail = action.payload.data.data || [];
        })
    }
);

// === Selector ===
export const listTodo = (state: RootState) => state.todoState.listTodo;
export const getDetailTodo = (state: RootState) => state.todoState.getDetail;

export default todoReducer;