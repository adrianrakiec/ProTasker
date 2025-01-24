import { Subtask } from './Task';

export type TaskFormState = {
	title: string;
	description: string;
	priority: 'low' | 'medium' | 'high';
	subtasks: Subtask[];
	subtaskTitle: string;
	dueDate? : Date;
};
