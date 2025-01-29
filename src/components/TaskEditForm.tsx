import { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../types/Task';
import { formReducer } from '../helpers/TaskFormReducer';
import { TaskFormState } from '../types/TaskFormState';
import { InputField } from './FormInputs/InputField';
import {
	addSubtask,
	removeSubtask,
	setField,
	toogleSubtaskStatus,
} from '../helpers/TaskFormActions';
import { TextareaField } from './FormInputs/TextareaField';
import { SelectField } from './FormInputs/SelectField';
import { DatePickerField } from './FormInputs/DatePickerField';
import { updateTask } from '../store/tasksSlice';
import { SubtaskList } from './SubtaskList';

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

	const handleChangeInputValue = (field: string, value: string) => {
		dispatchForm(setField(field, value));
	};

	const handleToggleSubtaskStatus = (id: string) => {
		dispatchForm(toogleSubtaskStatus(id));
		setIsEditing(true);
	};

	const handleAddSubtask = (id: string) => {
		dispatchForm(addSubtask(id));
	};

	const handleRemoveSubtask = (id: string) => {
		dispatchForm(removeSubtask(id));
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
		<div className='my-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
			<form
				onSubmit={handleSaveClick}
				className='col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-6'
			>
				<div className='border-b pb-4'>
					<h2 className='text-xl font-bold text-gray-900 dark:text-white'>
						Task Details
					</h2>
					{!isEditing ? (
						<div className='flex items-center mb-4'>
							<p className='text-gray-500 dark:text-gray-400 text-sm'>
								View or edit the task details below.
							</p>
							<button
								type='button'
								className='ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
								onClick={handleEditClick}
							>
								Edit
							</button>
						</div>
					) : (
						<div className='flex items-center mb-4'>
							<p className='text-green-700 dark:text-green-400 text-sm font-bold'>
								You are now editing this task.
							</p>
							<button
								type='button'
								className='ml-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
								onClick={handleSaveClick}
							>
								Save
							</button>
						</div>
					)}
				</div>

				<div className='space-y-4'>
					<InputField
						label='Title'
						value={state.title}
						onChange={e => handleChangeInputValue('title', e.target.value)}
						required
						placeholder='Task title'
						disabled={!isEditing}
					/>

					<TextareaField
						label='Description'
						value={state.description}
						onChange={e =>
							handleChangeInputValue('description', e.target.value)
						}
						rows={4}
						placeholder='Description (optional)'
						disabled={!isEditing}
					/>

					<SelectField
						label='Priority'
						value={state.priority}
						onChange={e => handleChangeInputValue('priority', e.target.value)}
						options={['low', 'medium', 'high']}
						disabled={!isEditing}
					/>

					<DatePickerField
						label='Deadline'
						value={state.dueDate}
						disabled={!isEditing}
						onChange={e => handleChangeInputValue('dueDate', e.target.value)}
					/>
				</div>
			</form>

			<SubtaskList
				subtasks={state.subtasks}
				isEditing={isEditing}
				subtaskTitle={state.subtaskTitle}
				onToggleSubtaskStatus={handleToggleSubtaskStatus}
				onRemoveSubtask={handleRemoveSubtask}
				onChangeInputValue={handleChangeInputValue}
				onAddSubtask={handleAddSubtask}
			/>
		</div>
	);
};
