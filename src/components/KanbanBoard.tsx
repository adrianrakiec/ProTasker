import React from 'react';
import { Task } from '../types/Task';
import { TaskCard } from './TaskCard';

interface KanbanBoardProps {
	tasks: Task[];
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
	const columns = [
		{ title: 'Todo', status: 'todo' },
		{ title: 'In Progress', status: 'in-progress' },
		{ title: 'Done', status: 'done' },
	];

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-4'>
			{columns.map(column => (
				<div
					key={column.status}
					className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow'
				>
					<h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4'>
						{column.title}
					</h2>
					<div className='flex flex-col gap-4'>
						{tasks
							.filter(task => task.status === column.status)
							.map(task => (
								<TaskCard key={task.id} task={task} />
							))}
					</div>
				</div>
			))}
		</div>
	);
};
