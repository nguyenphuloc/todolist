import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useAppDispatch } from '../../store/hooks';
import { useNavigate, useParams } from 'react-router';
import {
	addTodoAction,
	updateTodoAction,
} from '../../actions/todoAction';


export default function AddToDo(){
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
	// const { id } = useParams();

    const [idTodo, setIdTodo] = useState<string | null>()

    const _handleAddTodo = ({ name }: { name: string}) => {
		if (idTodo) {
			// dispatch(updateTodoAction({ name, _id: id }, callback));
			setIdTodo(null);
		} else {
			dispatch(addTodoAction({ name, isComplete: false }));
		}
		form.resetFields();
        navigate('/', {replace: true});
	}

    return(
        <div className="page-home">
            <Form form={form} name="horizontal" layout="inline" onFinish={_handleAddTodo} className="form">
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