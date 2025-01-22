import { Navbar } from './components/Navbar';
import { TaskCard } from './components/TaskCard';
import { useDarkMode } from './hooks/useDarkMode';

export const App = () => {
	const { isDarkMode, toggleTheme } = useDarkMode();

	return (
		<div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
			<Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
			<div className='p-10'>
				<TaskCard
					task={{
						id: 'dasf',
						title: 'asdfa',
						priority: 'medium',
						status: 'todo',
					}}
				/>
			</div>
		</div>
	);
};
