import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { TaskStatus } from '../types/TaskStatus';
import { SECTIONS } from '../helpers/sectionName';
import { Task } from '../types/Task';
import { updateTask } from '../store/tasksSlice';
import { Link } from 'react-router';

export const TaskList: React.FC = () => {
	const dispatch = useDispatch();
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

	const handleChangeStatus = (task: Task, newStatus: TaskStatus) => {
		const completionDate =
			newStatus === 'done' ? new Date().toLocaleDateString() : '';
		dispatch(updateTask({ id: task.id, status: newStatus, completionDate }));
	};

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
										<Link to={`/task-details/${task.id}`}>{task.title}</Link>
									</h4>
									{task.description && (
										<p className='text-sm text-gray-600 dark:text-gray-400'>
											{task.description}
										</p>
									)}
								</div>

								<div className='flex gap-2 '>
									<div className='text-right mr-8'>
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

									{section.status !== 'todo' && (
										<button
											onClick={() => handleChangeStatus(task, 'todo')}
											className='px-2 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded text-sm hover:bg-gray-400 dark:hover:bg-gray-500'
										>
											To Do
										</button>
									)}
									{section.status !== 'in-progress' && (
										<button
											onClick={() => handleChangeStatus(task, 'in-progress')}
											className='px-2 py-1 bg-yellow-300 dark:bg-yellow-600 text-yellow-900 dark:text-white rounded text-sm hover:bg-yellow-400 dark:hover:bg-yellow-500'
										>
											In Progress
										</button>
									)}
									{section.status !== 'done' && (
										<button
											onClick={() => handleChangeStatus(task, 'done')}
											className='px-2 py-1 bg-green-300 dark:bg-green-600 text-green-900 dark:text-white rounded text-sm hover:bg-green-400 dark:hover:bg-green-500'
										>
											Done
										</button>
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
