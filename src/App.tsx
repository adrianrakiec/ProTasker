import { useDarkMode } from './hooks/useDarkMode';
import { Outlet } from 'react-router';
import { Navbar } from './components/Navbar';

export const App = () => {
	const { isDarkMode, toggleTheme } = useDarkMode();

	return (
		<div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
			<Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
			<Outlet />
		</div>
	);
};
