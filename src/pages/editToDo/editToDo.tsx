import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
// import { Form, Input, Button } from 'antd';
import { getDetailTodo, listTodo } from '../../reducers/todoReducer';
import {
	updateTodoAction,
	getTodoAction, 
	listTodoAction
} from '../../actions/todoAction';
import { useNavigate, useParams } from 'react-router';

import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export default function EditToDo() {
    const inputRef = useRef<HTMLInputElement>()
	const dataDetail = useAppSelector(getDetailTodo);
	const list = useAppSelector(listTodo);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
	const { id } = useParams();

    const [idTodo, setIdTodo] = useState<string | null>();

    const callback = () => {
        navigate('/', {replace: true});
	}

    const _handleAddTodo = () => {
		const name: any = inputRef.current;
		dispatch(updateTodoAction({ name: name.value, _id: id, callback }));
		setIdTodo(null);
	}

	const _handleEditTodo = (id: string | undefined) => {
		const { name: any } = list.find((item) => item._id === id) || {};
		if (inputRef.current) {
			inputRef.current.value = "abcxyz";
		  }
		setIdTodo(id);
		navigate(`/edit/${id}`);
	}

	useEffect(() => {
		dispatch(listTodoAction());
		console.log('list');
	}, [])

	useEffect(() => {
		if (dataDetail) {
			const name = dataDetail.name;
			const edit: any = inputRef.current;
			const currenrVal: any = edit.name;
		}
	}, [dataDetail])

    return(
		<div className={styles.pageEdit}>
		<form  className={styles.formName}>
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
						Edit
					</Button>
		</form>
	</div>
    )
}