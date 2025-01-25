import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import viewReducer from './viewSlice';

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		view: viewReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
