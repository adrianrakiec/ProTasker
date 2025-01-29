import { Subtask, Task } from '../types/Task';

const isSubtask = (subtask: Subtask): subtask is Subtask => {
	return (
		typeof subtask === 'object' &&
		subtask !== null &&
		typeof subtask.id === 'string' &&
		typeof subtask.title === 'string' &&
		typeof subtask.completed === 'boolean'
	);
};

const isTask = (task: Task): task is Task => {
	return (
		typeof task === 'object' &&
		task !== null &&
		typeof task.id === 'string' &&
		typeof task.title === 'string' &&
		['low', 'medium', 'high'].includes(task.priority) &&
		['todo', 'in-progress', 'done'].includes(task.status) &&
		Array.isArray(task.subtasks) &&
		task.subtasks.every(isSubtask) &&
		typeof task.dueDate === 'string'
	);
};

export const isValidTaskArray = (data: Task[]): data is Task[] => {
	return Array.isArray(data) && data.every(isTask);
};
