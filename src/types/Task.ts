import { TaskPriority } from './TaskPriority';
import { TaskStatus } from './TaskStatus';

export type Task = {
	id: string;
	title: string;
	description?: string;
	dueDate?: string;
	priority: TaskPriority;
	status: TaskStatus;
	subtasks?: Subtask[];
};

type Subtask = {
	id: string;
	title: string;
	completed: boolean;
};
