import { isValidTaskArray } from '../helpers/importValidate';
import { Subtask, Task } from '../types/Task';

const validSubtask: Subtask = {
	id: '1',
	title: 'Subtask 1',
	completed: true,
};

const validTask: Task = {
	id: '1',
	title: 'Task 1',
	priority: 'low',
	status: 'todo',
	subtasks: [validSubtask],
	dueDate: '2023-12-31',
};

const invalidTask = {
	id: '2',
	priority: 'high',
	status: 'done',
	subtasks: [],
	dueDate: '2023-12-31',
};

describe('isValidTaskArray', () => {
	it('should return true for valid task array', () => {
		const tasks = [validTask, validTask];
		const result = isValidTaskArray(tasks);
		expect(result).toBe(true);
	});

	it('should return false for array with invalid task', () => {
		const tasks = [validTask, invalidTask];
		const result = isValidTaskArray(tasks as any);
		expect(result).toBe(false);
	});

	it('should return true for empty array', () => {
		const tasks: Task[] = [];
		const result = isValidTaskArray(tasks);
		expect(result).toBe(true);
	});

	it('should return false for array with non-task elements', () => {
		const tasks = ['invalid', 123, true];
		const result = isValidTaskArray(tasks as any);
		expect(result).toBe(false);
	});
});
