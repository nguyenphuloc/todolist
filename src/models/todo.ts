export interface ItemTodoState {
    _id?: string;
    name?: string;
    isComplete?: boolean;
    callback?: any
}

export type TodoState = {
    listTodo: ItemTodoState[];
    status: 'idle' | 'loading' | 'failed';
}