import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { App } from './App.tsx';
import { MainPage } from './pages/MainPage.tsx';
import { TaskForm } from './components/TaskForm/TaskForm.tsx';
import { KanbanBoard } from './components/KanbanBoard.tsx';
import { TaskList } from './components/TaskList.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route path='/' element={<MainPage />}>
							<Route index element={<KanbanBoard />} />
							<Route path='list' element={<TaskList />} />
						</Route>
						<Route path='/create-task' element={<TaskForm />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
