import { useDarkMode } from './hooks/useDarkMode';
import { Outlet } from 'react-router';
import { Topbar } from './components/Topbar';

export const App = () => {
	const { isDarkMode, toggleTheme } = useDarkMode();

	return (
		<div className='min-h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden'>
			<Topbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
			<Outlet />
		</div>
	);
};
