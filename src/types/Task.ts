import { TaskPriority } from './TaskPriority';
import { TaskStatus } from './TaskStatus';

export type Task = {
	id: string;
	title: string;
	description?: string;
	dueDate?: Date;
	priority: TaskPriority;
	status: TaskStatus;
	subtasks?: Subtask[];
};

export type Subtask = {
	id: string;
	title: string;
	completed: boolean;
};
