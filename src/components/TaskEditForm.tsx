import { useReducer, useState } from 'react';
import { Task } from '../types/Task';
import { formReducer } from './TaskForm/TaskFormReducer';
import { TaskFormState } from '../types/TaskFormState';
import { InputField } from './FormInputs/InputField';
import { addSubtask, setField } from './TaskForm/TaskFormActions';
import { TextareaField } from './FormInputs/TextareaField';
import { SelectField } from './FormInputs/SelectField';
import { DatePickerField } from './FormInputs/DatePickerField';
import { AddSubtask } from './AddSubtask';
import { updateTask } from '../store/tasksSlice';
import { useDispatch } from 'react-redux';

interface TaskEditFormProps {
	task: Task;
}

export const TaskEditForm: React.FC<TaskEditFormProps> = ({ task }) => {
	const initialState: TaskFormState = {
		title: task.title,
		description: task.description || '',
		priority: task.priority,
		subtasks: task.subtasks || [],
		subtaskTitle: '',
		dueDate: task.dueDate,
	};

	const dispatch = useDispatch();
	const [state, dispatchForm] = useReducer(formReducer, initialState);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (e: React.FormEvent) => {
		e.preventDefault();

		if (!state.title.trim()) {
			alert('Title is required!');
			return;
		}

		dispatch(
			updateTask({
				id: task.id,
				title: state.title,
				description: state.description,
				priority: state.priority,
				dueDate: state.dueDate,
				subtasks: state.subtasks,
			})
		);

		setIsEditing(false);
	};

	return (
		<form
			onSubmit={handleSaveClick}
			className='mt-4 max-w-xl mx-auto bg-white dark:bg-gray-800 p-5 rounded-lg shadow'
		>
			<div className='mb-4'>
				<InputField
					label='Title'
					value={state.title}
					onChange={e => dispatchForm(setField('title', e.target.value))}
					required
					placeholder='Task title'
					disabled={!isEditing}
				/>
			</div>

			<div className='mb-4'>
				<TextareaField
					label='Description'
					value={state.description}
					onChange={e => dispatchForm(setField('description', e.target.value))}
					rows={3}
					placeholder='Description (optional)'
					disabled={!isEditing}
				/>
			</div>

			<div className='mb-4'>
				<SelectField
					label='Priority'
					value={state.priority}
					onChange={e => dispatchForm(setField('priority', e.target.value))}
					options={['low', 'medium', 'high']}
					disabled={!isEditing}
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
			</div>

			<div className='mb-4'>
				<DatePickerField
					label='Deadline'
					value={state.dueDate}
					disabled={!isEditing}
					onChange={e => dispatchForm(setField('dueDate', e.target.value))}
				/>
			</div>

			<div className='mb-4'>
				{!isEditing ? (
					<button
						type='button'
						className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
						onClick={handleEditClick}
					>
						Edit
					</button>
				) : (
					<button
						type='button'
						className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
						onClick={handleSaveClick}
					>
						Save
					</button>
				)}
			</div>
		</form>
	);
};
