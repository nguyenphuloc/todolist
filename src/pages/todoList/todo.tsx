import React, { FC, useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { listTodo } from '../../reducers/todoReducer';
import {
	addTodoAction,
	deleteTodoAction,
	updateTodoAction,
	listTodoAction,
} from '../../actions/todoAction';
import styles from './todo.module.css';
import { useNavigate } from 'react-router';

const Todo: FC = () => {
	const [form] = Form.useForm();
	const list = useAppSelector(listTodo);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [idTodo, setIdTodo] = useState<string | null>()

	const handleClickAdd = () => {
		navigate('/add');
	}

	const _handleAddTodo = ({ name }: { name: string}) => {
		if (idTodo) {
			// dispatch(updateTodoAction({ name, _id: idTodo }));
			setIdTodo(null);
		} else {
			dispatch(addTodoAction({ name, isComplete: false }));
		}
		form.resetFields();
	}

	const _handleEditTodo = (id: string | undefined) => {
		const { name } = list.find((item) => item._id === id) || {};
		form.setFieldsValue({
			name
		});
		setIdTodo(id);
		navigate(`/edit/${id}`);
	}

	useEffect(() => {
		dispatch(listTodoAction());
		console.log('====================================');
		console.log('list');
		console.log('====================================');
	}, [])

	return (
		<div className={styles.todoContainer}>
			<h1>TodoList</h1>
			<button
				onClick={handleClickAdd}
			>
				Add
			</button>
			<div className={styles.list}>
				{(list || [])?.map((item, idx) => (
					<div key={idx} className={styles.listItem}>
						<span>{item.name}</span>
						<span>
							<EditOutlined className={styles.iconEdit} onClick={() => _handleEditTodo(item._id)} />
							<DeleteOutlined onClick={() => dispatch(deleteTodoAction({_id: item._id}))} />
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default Todo;