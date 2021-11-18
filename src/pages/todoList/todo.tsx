import React, { FC, useEffect, useState, useRef } from 'react';
import { Form, Input } from 'antd';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { listTodo } from '../../reducers/todoReducer';
import {
	addTodoAction,
	deleteTodoAction,
	updateTodoAction,
	listTodoAction,
} from '../../actions/todoAction';
import styles from './todo.module.scss';
import { useNavigate } from 'react-router';

import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const Todo: FC = () => {
	const inputRef = useRef<HTMLInputElement | undefined>(null);
	const list = useAppSelector(listTodo);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [idTodo, setIdTodo] = useState<string | null>()

	const handleClickAdd = () => {
		navigate('/add');
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

	return (
		<div className={styles.todoContainer}>
			<h1>TodoList</h1>
			<Button
				variant='contained'
				onClick={handleClickAdd}
			>
				<AddRoundedIcon />
				Add
			</Button>
			<div className={styles.list}>
				<Box
      				sx={{ width: '100%', maxWidth: 420 }}
    			>
					<List sx={{ width: '100%', maxWidth: 420}}>
						{(list || [])?.map((item, idx) => (
        				<ListItem key={idx} className={styles.listItem} component="div" disablePadding>
      						<ListItemButton className={styles.listItemButton}>
        						<ListItemText primary={item.name} />
								<span>
									<Button
										className={styles.btnIcon}
										variant='contained'
									>
										<EditRoundedIcon onClick={() => _handleEditTodo(item._id)} />
									</Button>
									<Button
										className={styles.btnIcon}
										variant='contained'
									>
										<DeleteRoundedIcon onClick={() => dispatch(deleteTodoAction({_id: item._id}))} />
									</Button>
								</span>	
      						</ListItemButton>
    					</ListItem>
						))}
					</List>
    			</Box>
			</div>
		</div>
	);
}

export default Todo;