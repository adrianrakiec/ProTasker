import { TaskFormState } from '../../types/TaskFormState';
import { TaskFormAction } from '../../types/TaskFormAction';

export const formReducer = (
	state: TaskFormState,
	action: TaskFormAction
): TaskFormState => {
	switch (action.type) {
		case 'SET_FIELD':
			return { ...state, [action.field]: action.value };

		case 'ADD_SUBTASK':
			if (!state.subtaskTitle.trim()) return state;
			return {
				...state,
				subtasks: [
					...state.subtasks,
					{ id: action.id, title: state.subtaskTitle, completed: false },
				],
				subtaskTitle: '',
			};

		case 'REMOVE_SUBTASK':
			return {
				...state,
				subtasks: state.subtasks.filter(subtask => subtask.id !== action.id),
			};

		case 'RESET_FORM':
			return {
				title: '',
				description: '',
				priority: 'low',
				subtasks: [],
				subtaskTitle: '',
				dueDate: undefined,
			};

		default:
			return state;
	}
};
