import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { TaskStatus } from '../types/TaskStatus';
import { SECTIONS } from '../helpers/sectionName';

export const TaskList: React.FC = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	const tasksByStatus = (status: TaskStatus) =>
		tasks.filter(task => task.status === status);

	const sections = SECTIONS;

	if (tasks.length === 0) {
		return (
			<div className='p-4 mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow'>
				<p className='text-center text-gray-700 dark:text-gray-300'>
					No tasks available.
				</p>
			</div>
		);
	}

	return (
		<div className='p-4 mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow'>
			{sections.map(section => (
				<div key={section.status} className='mb-8'>
					<h3 className='text-xl font-medium text-gray-800 dark:text-white mb-4'>
						{section.title}
					</h3>

					<ul className='space-y-4'>
						{tasksByStatus(section.status as TaskStatus).map(task => (
							<li
								key={task.id}
								className='flex justify-between items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-600'
							>
								<div>
									<h4 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
										{task.title}
									</h4>
									{task.description && (
										<p className='text-sm text-gray-600 dark:text-gray-400'>
											{task.description}
										</p>
									)}
								</div>

								<div className='text-right'>
									<p
										className={`text-sm font-medium ${
											task.priority === 'high'
												? 'text-red-500'
												: task.priority === 'medium'
												? 'text-yellow-500'
												: 'text-green-500'
										}`}
									>
										Priority: {task.priority}
									</p>
									{task.dueDate && (
										<p className='text-sm text-gray-600 dark:text-gray-400'>
											Due: {new Date(task.dueDate).toLocaleDateString()}
										</p>
									)}
								</div>
							</li>
						))}

						{tasksByStatus(section.status as TaskStatus).length === 0 && (
							<p className='text-sm text-gray-600 dark:text-gray-400'>
								No tasks
							</p>
						)}
					</ul>
				</div>
			))}
		</div>
	);
};
