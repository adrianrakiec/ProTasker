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

const initialState: TaskFormState = {
	title: '',
	description: '',
	priority: 'low',
	subtasks: [],
	subtaskTitle: '',
	dueDate: undefined,
};

export const TaskForm: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [state, dispatchForm] = useReducer(formReducer, initialState);

	const today = new Date().toISOString().split('T')[0];

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
				<label
					htmlFor='title'
					className='block text-gray-800 dark:text-white font-medium mb-2'
				>
					Title <span className='text-red-500'>*</span>
				</label>
				<input
					id='title'
					type='text'
					value={state.title}
					onChange={e => dispatchForm(setField('title', e.target.value))}
					className='w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
					required
				/>
			</div>

			<div className='mb-4'>
				<label
					htmlFor='description'
					className='block text-gray-800 dark:text-white font-medium mb-2'
				>
					Description (Optional)
				</label>
				<textarea
					id='description'
					value={state.description}
					onChange={e => dispatchForm(setField('description', e.target.value))}
					className='w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
					rows={3}
				></textarea>
			</div>

			<div className='mb-4'>
				<label
					htmlFor='priority'
					className='block text-gray-800 dark:text-white font-medium mb-2'
				>
					Priority
				</label>
				<select
					id='priority'
					value={state.priority}
					onChange={e => dispatchForm(setField('priority', e.target.value))}
					className='w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
				>
					<option value='low'>Low</option>
					<option value='medium'>Medium</option>
					<option value='high'>High</option>
				</select>
			</div>

			<div className='mb-4'>
				<label className='block text-gray-800 dark:text-white font-medium mb-2'>
					Subtasks
				</label>
				<div className='flex items-center gap-2 mb-2'>
					<input
						type='text'
						value={state.subtaskTitle}
						onChange={e =>
							dispatchForm(setField('subtaskTitle', e.target.value))
						}
						placeholder='Subtask title'
						className='w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<button
						type='button'
						onClick={() => dispatchForm(addSubtask(Date.now().toString()))}
						className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
					>
						Add
					</button>
				</div>
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
				<label
					htmlFor='dueDate'
					className='block text-gray-800 dark:text-white font-medium mb-2'
				>
					Due Date (Optional)
				</label>
				<input
					id='dueDate'
					type='date'
					min={today}
					onChange={e => dispatchForm(setField('dueDate', e.target.value))}
					className='w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
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
