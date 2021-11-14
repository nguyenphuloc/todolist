import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Form, Input, Button } from 'antd';
import { listTodo } from '../../reducers/todoReducer';
import {
	addTodoAction,
	deleteTodoAction,
	updateTodoAction,
	listTodoAction,
} from '../../actions/todoAction';
import { useNavigate, useParams } from 'react-router';

export default function EditToDo() {
    const [form] = Form.useForm();
	const list = useAppSelector(listTodo);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
	const { id } = useParams();

    const [idTodo, setIdTodo] = useState<string | null>();

    const callback = () => {
        navigate('/', {replace: true});
	}

    const _handleAddTodo = ({ name }: { name: string}) => {
		dispatch(updateTodoAction({ name, _id: id }, callback));
		setIdTodo(null);
		form.resetFields();
        
	}

    return(
        <div>
            <Form form={form} name="horizontal" layout="inline" className="form" onFinish={_handleAddTodo}>
				<Form.Item
					name="name"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input size="large" placeholder="Text" className="input" />
				</Form.Item>
				<Form.Item shouldUpdate>
					{() => (
						<Button
							type="primary"
							htmlType="submit"
							className="button"
							disabled={
								!form.isFieldsTouched(true) ||
								!!form.getFieldsError().filter(({ errors }) => errors.length).length
							}
						>
							{ idTodo ? "Edit" : "Add" }
						</Button>
					)}
				</Form.Item>
			</Form>
        </div>
    )
}