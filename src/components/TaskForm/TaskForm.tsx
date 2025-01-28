import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addTask } from '../../store/tasksSlice';
import { TaskPriority } from '../../types/TaskPriority';
import { Task } from '../../types/Task';
import { TaskFormState } from '../../types/TaskFormState';
import {
	setField,
	addSubtask,
	removeSubtask,
	resetForm,
} from './TaskFormActions';
import { formReducer } from './TaskFormReducer';
import { InputField } from '../FormInputs/InputField';
import { TextareaField } from '../FormInputs/TextareaField';
import { SelectField } from '../FormInputs/SelectField';
import { DatePickerField } from '../FormInputs/DatePickerField';
import { AddSubtask } from '../AddSubtask';

const initialState: TaskFormState = {
	title: '',
	description: '',
	priority: 'low',
	subtasks: [],
	subtaskTitle: '',
	dueDate: '',
};

export const TaskForm: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [state, dispatchForm] = useReducer(formReducer, initialState);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!state.title.trim()) {
			alert('Title is required!');
			return;
		}

		const newTask: Task = {
			id: Date.now().toString(),
			title: state.title,
			description: state.description,
			priority: state.priority as TaskPriority,
			subtasks: state.subtasks,
			status: 'todo',
			dueDate: state.dueDate,
		};

		dispatch(addTask(newTask));
		dispatchForm(resetForm());
		navigate('/');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='mt-4 max-w-xl mx-auto bg-white dark:bg-gray-800 p-5 rounded-lg shadow'
		>
			<h2 className='text-2xl font-semibold mb-4'>Create New Task</h2>

			<div className='mb-4'>
				<InputField
					label='Title'
					value={state.title}
					onChange={e => dispatchForm(setField('title', e.target.value))}
					required={true}
					placeholder='Task title'
				/>
			</div>

			<div className='mb-4'>
				<TextareaField
					label='Description'
					value={state.description}
					onChange={e => dispatchForm(setField('description', e.target.value))}
					rows={3}
					placeholder='Description (optional)'
				/>
			</div>

			<div className='mb-4'>
				<SelectField
					label='Priority'
					value={state.priority}
					onChange={e => dispatchForm(setField('priority', e.target.value))}
					options={['low', 'medium', 'high']}
				/>
			</div>

			<div className='mb-4'>
				<AddSubtask
					subtaskTitle={state.subtaskTitle}
					onChangeSubtaskTitle={e =>
						dispatchForm(setField('subtaskTitle', e.target.value))
					}
					onAddSubtask={() => dispatchForm(addSubtask(Date.now().toString()))}
				/>

				<ul>
					{state.subtasks.map(subtask => (
						<li
							key={subtask.id}
							className='flex justify-between items-center mb-1'
						>
							<span className='dark:text-white'>{subtask.title}</span>
							<button
								type='button'
								onClick={() => dispatchForm(removeSubtask(subtask.id))}
								className='text-red-500 hover:underline'
							>
								Remove
							</button>
						</li>
					))}
				</ul>
			</div>

			<div className='mb-4'>
				<DatePickerField
					label='Deadline'
					onChange={e => dispatchForm(setField('dueDate', e.target.value))}
				/>
			</div>

			<div className='text-center'>
				<button
					type='submit'
					className='bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600'
				>
					Create Task
				</button>
			</div>
		</form>
	);
};
