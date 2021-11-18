import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useNavigate, useParams } from 'react-router';
import { listTodo, getDetailTodo } from '../../reducers/todoReducer';
import {
	addTodoAction,
	updateTodoAction,
	getTodoAction
} from '../../actions/todoAction';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function AddToDo(){
    const inputRef = useRef<HTMLInputElement | undefined>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
	const list = useAppSelector(listTodo);
	const { id } = useParams();


    const [idTodo, setIdTodo] = useState<string | null>()

	const callback = () => {
		navigate(-1);
	}

	

    const _handleAddTodo = () => {
		const name: any = inputRef.current;
		console.log(name);
		dispatch(addTodoAction({ name: name.value, isComplete: false, callback }))
		setIdTodo(null);
	}
	// <FormControl form={form} name="horizontal" layout="inline" onFinish={_handleAddTodo} className="form">
    return(
        <div className={styles.pageAdd}>
            <form className={styles.formName}>
				<TextField 
					inputRef={inputRef}
					className={styles.textName}
					id="outlined-basic" 
					label="Fill in this field" 
					variant="outlined"
					name="name"
				/>
				<Button
					className="button"
					variant='contained'
					onClick={_handleAddTodo}						
				>
					Add
				</Button>
			</form>
        </div>
    )
}