import { useDroppable } from '@dnd-kit/core';
import { Task } from '../types/Task';
import { DraggableTaskCard } from './DragabbleTaskCard';

interface KanbanColumnProps {
	column: { title: string; status: string };
	tasks: Task[];
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
	column,
	tasks,
}) => {
	const { setNodeRef } = useDroppable({ id: column.status });

	return (
		<div
			ref={setNodeRef}
			className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow'
		>
			<h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4'>
				{column.title}
			</h2>
			<div className='flex flex-col gap-4'>
				{tasks.map(task => (
					<DraggableTaskCard key={task.id} task={task} />
				))}
			</div>
		</div>
	);
};
