import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/Task';

interface TasksState {
	tasks: Task[];
}

const initialState: TasksState = {
	tasks: [
		{
			id: '1',
			title: 'Task 1',
			priority: 'low',
			status: 'todo',
			dueDate: '2025-01-25',
		},
		{ id: '2', title: 'Task 2', priority: 'medium', status: 'in-progress' },
		{
			id: '3',
			title: 'Task 3',
			priority: 'high',
			status: 'done',
			dueDate: '2025-01-20',
		},
	],
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<Task>) {
			state.tasks.push(action.payload);
		},
		removeTask(state, action: PayloadAction<string>) {
			state.tasks = state.tasks.filter(task => task.id !== action.payload);
		},
		updateTask(state, action: PayloadAction<Partial<Task> & { id: string }>) {
			const index = state.tasks.findIndex(
				task => task.id === action.payload.id
			);
			if (index !== -1) {
				state.tasks[index] = { ...state.tasks[index], ...action.payload };
			}
		},
	},
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
