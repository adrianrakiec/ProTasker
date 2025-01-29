import { TaskFormAction } from '../types/TaskFormAction';

export const setField = (field: string, value: string): TaskFormAction => ({
	type: 'SET_FIELD',
	field,
	value,
});

export const addSubtask = (id: string): TaskFormAction => ({
	type: 'ADD_SUBTASK',
	id,
});

export const removeSubtask = (id: string): TaskFormAction => ({
	type: 'REMOVE_SUBTASK',
	id,
});

export const toogleSubtaskStatus = (id: string): TaskFormAction => ({
	type: 'TOGGLE_SUBTASK_COMPLETED',
	id,
});

export const resetForm = (): TaskFormAction => ({
	type: 'RESET_FORM',
});
