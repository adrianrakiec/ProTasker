import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { PieChartComponent } from './PieChartComponent';

export const OverviewStats: React.FC = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	const totalTasks = tasks.length;
	const completedTasks = tasks.filter(task => task.status === 'done').length;
	const incompleteTasks = totalTasks - completedTasks;

	const allSubtasks = tasks.flatMap(task => task.subtasks || []);
	const totalSubtasks = allSubtasks.length;
	const completedSubtasks = allSubtasks.filter(sub => sub.completed).length;
	const incompleteSubtasks = totalSubtasks - completedSubtasks;

	const taskData = [
		{ name: 'Completed', value: completedTasks },
		{ name: 'Incomplete', value: incompleteTasks },
	];

	const subtaskData = [
		{ name: 'Completed', value: completedSubtasks },
		{ name: 'Incomplete', value: incompleteSubtasks },
	];

	return (
		<div className='p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
			<div className='w-full p-6 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-center grid grid-cols-2 md:grid-cols-3 gap-4'>
				<div>
					<h3 className='text-lg font-medium'>Total Tasks</h3>
					<p className='text-2xl font-bold'>{totalTasks}</p>
				</div>
				<div>
					<h3 className='text-lg font-medium'>Completed Tasks</h3>
					<p className='text-2xl font-bold text-green-500'>{completedTasks}</p>
				</div>
				<div>
					<h3 className='text-lg font-medium'>Incomplete Tasks</h3>
					<p className='text-2xl font-bold text-red-500'>{incompleteTasks}</p>
				</div>
				<div>
					<h3 className='text-lg font-medium'>Total Subtasks</h3>
					<p className='text-2xl font-bold'>{totalSubtasks}</p>
				</div>
				<div>
					<h3 className='text-lg font-medium'>Completed Subtasks</h3>
					<p className='text-2xl font-bold text-green-500'>
						{completedSubtasks}
					</p>
				</div>
				<div>
					<h3 className='text-lg font-medium'>Incomplete Subtasks</h3>
					<p className='text-2xl font-bold text-red-500'>
						{incompleteSubtasks}
					</p>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
				<div className='flex flex-col items-center p-4 border rounded-lg bg-gray-100 dark:bg-gray-700'>
					<PieChartComponent data={taskData} title='Task Completion' />
				</div>

				<div className='flex flex-col items-center p-4 border rounded-lg bg-gray-100 dark:bg-gray-700'>
					<PieChartComponent
						data={subtaskData}
						title='Subtask Completion'
						colors={['#0088FE', '#FFBB28']}
					/>
				</div>
			</div>
		</div>
	);
};
