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
import { useNavigate } from 'react-router';

export default function EditToDo() {
    const [form] = Form.useForm();
	const list = useAppSelector(listTodo);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [idTodo, setIdTodo] = useState<string | null>();

    // const _handleAddTodo = ({ name }: { name: string}) => {
	// 	if (idTodo) {
	// 		dispatch(updateTodoAction({ name, _id: idTodo }));
	// 		setIdTodo(null);
	// 	} else {
	// 		dispatch(addTodoAction({ name, isComplete: false }));
	// 	}
	// 	form.resetFields();
        
	// }

    const _handleEditTodo = (id: string | undefined) => {
        const { name } = list.find((item) => item._id === id) || {};
        form.setFieldsValue({
            name
        });
        setIdTodo(id);
    }

    const handleClickHome = () => {
        navigate('/', {replace: true});
    }
    return(
        <div>
            <Form form={form} name="horizontal" layout="inline" className="form">
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
                            onClick={handleClickHome}
						>
							{ idTodo ? "Edit" : "Add" }
						</Button>
					)}
				</Form.Item>
			</Form>
            {(list || [])?.map((item, idx) => (
					<div key={idx} className="listItem">
						<span>{item.name}</span>
                        <EditOutlined className="icon" onClick={() => _handleEditTodo(item._id)} />
                    </div>
            ))}
        </div>
    )
}