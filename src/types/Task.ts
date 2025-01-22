export type Task = {
	id: string;
	title: string;
	description?: string;
	dueDate?: string;
	priority: 'low' | 'medium' | 'high';
	status: 'todo' | 'in-progress' | 'done';
	subtasks?: Subtask[];
};

type Subtask = {
	id: string;
	title: string;
	completed: boolean;
};
