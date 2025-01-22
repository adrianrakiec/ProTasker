import { Task } from '../types/Task';

interface TaskCardProps {
	task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
	const getPriorityColor = () => {
		switch (task.priority) {
			case 'low':
				return 'bg-green-200 text-green-800';
			case 'medium':
				return 'bg-yellow-200 text-yellow-800';
			case 'high':
				return 'bg-red-200 text-red-800';
			default:
				return 'bg-gray-200 text-gray-800';
		}
	};

	return (
		<div className='p-5 bg-yellow-100 border border-yellow-300 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out overflow-hidden'>
			<div className='flex justify-end'>
				<div className={`p-1 text-sm font-bold rounded ${getPriorityColor()}`}>
					{task.priority.toUpperCase()}
				</div>
			</div>

			<h3 className='text-lg font-semibold text-gray-800 break-words'>
				{task.title}
			</h3>

			{task.description && (
				<p className='text-sm text-gray-600 mt-2'>{task.description}</p>
			)}

			{task.dueDate && (
				<p className='text-sm text-red-600 mt-2'>
					<strong>Deadline:</strong> {task.dueDate}
				</p>
			)}

			<div className='flex justify-end gap-2 mt-4'>
				<button
					className='text-sm text-gray-600 hover:text-gray-800 underline'
					onClick={() => console.log('edit')}
				>
					Details
				</button>
			</div>
		</div>
	);
};
