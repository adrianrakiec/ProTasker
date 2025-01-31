import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { App } from './App.tsx';
import { MainPage } from './pages/MainPage.tsx';
import { TaskForm } from './components/TaskForm.tsx';
import { TaskDetailsPage } from './pages/TaskDetailsPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { ImportExportPage } from './pages/ImportExportPage.tsx';
import { StatisticsPage } from './pages/StatisticsPage.tsx';
import { OverviewStats } from './components/Statistics/OverviewStats.tsx';
import { Trends } from './components/Statistics/Trends.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<MainPage />} />
						<Route path='/create-task' element={<TaskForm />} />
						<Route path='/task-details/:id' element={<TaskDetailsPage />} />
						<Route path='/import-export' element={<ImportExportPage />} />
						<Route path='/statistics' element={<StatisticsPage />}>
							<Route index element={<OverviewStats />} />
							<Route path='/statistics/trends' element={<Trends />} />
						</Route>
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
