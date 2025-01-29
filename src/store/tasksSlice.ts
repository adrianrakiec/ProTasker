import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/Task';

interface TasksState {
	tasks: Task[];
}

const initialState: TasksState = {
	tasks: [],
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
		clearTasks(state) {
			state.tasks = [];
		},
	},
});

export const { addTask, removeTask, updateTask, clearTasks } =
	tasksSlice.actions;
export default tasksSlice.reducer;
