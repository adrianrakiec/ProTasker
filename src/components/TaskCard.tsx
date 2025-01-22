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
		<div className='relative p-4 bg-yellow-100 border border-yellow-300 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out'>
			<div
				className={`absolute top-2 right-2 px-2 py-1 text-sm font-bold rounded ${getPriorityColor()}`}
			>
				{task.priority.toUpperCase()}
			</div>

			<h3 className='text-lg font-semibold text-gray-800'>{task.title}</h3>

			{task.description && (
				<p className='text-sm text-gray-600 mt-2'>{task.description}</p>
			)}

			{task.dueDate && (
				<p className='text-sm text-gray-500 mt-2'>
					<strong>Due:</strong> {task.dueDate}
				</p>
			)}

			<div className='flex justify-end gap-2 mt-4'>
				<button
					className='text-sm text-blue-600 hover:text-blue-800 underline'
					onClick={() => console.log('edit')}
				>
					Edit
				</button>
				<button
					className='text-sm text-red-600 hover:text-red-800 underline'
					onClick={() => console.log('delete')}
				>
					Delete
				</button>
			</div>
		</div>
	);
};
