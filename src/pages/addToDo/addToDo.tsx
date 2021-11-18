import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import styles from './styles.module.scss';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useAppDispatch } from '../../store/hooks';
import { addTodoAction } from '../../actions/todoAction';

export default function AddToDo(){
    const inputRef = useRef<HTMLInputElement | undefined>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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

    return(
        <div className={styles.pageAdd}>
            <form className={styles.formName}>
				<TextField 
					inputRef={inputRef}
					className={styles.textName}
					id="id" 
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