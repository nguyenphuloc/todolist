import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import styles from './styles.module.scss';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getDetailTodo } from '../../reducers/todoReducer';
import { updateTodoAction, getTodoAction } from '../../actions/todoAction';

export default function EditToDo() {
    const dataDetail = useAppSelector(getDetailTodo);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [text, setText] = useState<string | null>()

    const callback = () => {
        navigate('/', {replace: true});
    }

    const _handleAddTodo = () => {
        dispatch(updateTodoAction({ name: text, _id: id, callback }));
        setText('')
    }

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
    }

    useEffect(() => {
        dispatch(getTodoAction({_id: id}));
    }, [])

    useEffect(() => {
        if (dataDetail) {
            const name = dataDetail.name || '';
            setText(name);
        }
    }, [dataDetail])

    return(
        <div className={styles.pageEdit}>
        <form  className={styles.formName}>
                <TextField 
                    className={styles.textName}
                    id="id" 
                    label="Fill in this field" 
                    variant="outlined"
                    name="name"
                    value={text}
                    onChange={onChangeText}
                />
                    <Button
                        className="button"
                        variant='contained'
                        onClick={_handleAddTodo}
                    >
                        Edit
                    </Button>
        </form>
    </div>
    )
}