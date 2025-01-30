import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { TaskTrendsChart } from '../components/Statistics/TaskTrendChart';

export const StatisticsPage: React.FC = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	return (
		<div className='p-6 bg-white dark:bg-gray-900 min-h-screen'>
			<h2 className='text-3xl font-bold text-center text-gray-800 dark:text-white mb-6'>
				Task Statistics Dashboard
			</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<TaskTrendsChart tasks={tasks} />
			</div>
		</div>
	);
};
