export interface ItemTodoState {
    _id?: string;
    name?: string | null;
    isComplete?: boolean;
    callback?: any
}

export type TodoState = {
    listTodo: ItemTodoState[];
    status: 'idle' | 'loading' | 'failed';
    getDetail: {
        name?: string
    }
}