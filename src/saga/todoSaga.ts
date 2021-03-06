import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as todoService from '../services/todoService';
import * as todoAction from '../actions/todoAction';
import { sagaWrapper } from '../utils/common';

const called: any = call;

function* listTodo() {
    yield takeLatest(
        todoAction.listTodoAction.toString(),
        sagaWrapper(function* (action: {}): any  {
            const result = yield called(todoService.getAllTodo, action);
            yield put(todoAction.listTodoSuccess(result))
        }, errorHandle(todoAction.todoFailure.toString())),
    )
}

function* createTodo() {
    yield takeLatest(
        todoAction.addTodoAction.toString(),
        sagaWrapper(function* (action: any): any  {
            yield called(todoService.createTodo, action.payload);
            action.payload.callback && action.payload.callback();
        }, errorHandle(todoAction.todoFailure.toString())),
    )
}

function* updateTodo() {
    yield takeLatest(
        todoAction.updateTodoAction.toString(),
        sagaWrapper(function* (action: any): any  {
            console.log(action);
            yield called(todoService.updateTodo, action.payload);
            action.payload.callback && action.payload.callback();
        }, errorHandle(todoAction.todoFailure.toString())),
    )
}

function* getByIdTodo() {
    yield takeLatest(
        todoAction.getTodoAction.toString(),
        sagaWrapper(function* (action: any): any  {
            const result = yield called(todoService.getTodo, action.payload);
            yield put(todoAction.getTodoSuccess(result))
        }, errorHandle(todoAction.todoFailure.toString())),
    )
}

function* deleteTodo() {
    yield takeLatest(
        todoAction.deleteTodoAction.toString(),
        sagaWrapper(function* (action: any): any  {
            yield called(todoService.deleteTodo, action.payload);
            yield put(todoAction.listTodoAction())
        }, errorHandle(todoAction.todoFailure.toString())),
    )
}

function* errorHandle(errorActionType: string) {
    yield put({ type: errorActionType });
}

export default function* generalSaga() {
    yield all([
        fork(listTodo),
        fork(createTodo),
        fork(updateTodo),
        fork(deleteTodo),
        fork(getByIdTodo),
    ])
}