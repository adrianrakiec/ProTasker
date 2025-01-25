import { getPriorityColor } from '../helpers/taskPriority';
import { Task } from '../types/Task';

interface TaskCardProps {
	task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
	return (
		<div className='p-4 bg-yellow-100 border border-yellow-300 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out overflow-hidden'>
			<div className='flex justify-end'>
				<div
					className={`p-1 text-sm font-bold rounded ${getPriorityColor(task)}`}
				>
					{task.priority.toUpperCase()}
				</div>
			</div>

			<h3 className='text-base font-semibold text-gray-800 break-words'>
				{task.title}
			</h3>

			{task.description && (
				<p className='text-sm text-gray-600 mt-2'>{task.description}</p>
			)}

			{task.dueDate && (
				<p className='text-sm text-red-600 mt-2'>
					<strong>Deadline:</strong>{' '}
					{new Date(task.dueDate).toLocaleDateString()}
				</p>
			)}

			<div className='flex justify-end gap-2 mt-4'>
				<button
					className='text-sm text-gray-600 hover:text-gray-800 underline'
					onClick={() => console.log('move to details')}
				>
					Details
				</button>
			</div>
		</div>
	);
};
