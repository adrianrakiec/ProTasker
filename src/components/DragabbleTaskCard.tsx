import { useDraggable } from '@dnd-kit/core';
import { Task } from '../types/Task';
import { TaskCard } from './TaskCard';
import { NavLink } from 'react-router';

interface DraggableTaskCardProps {
	task: Task;
}

export const DraggableTaskCard: React.FC<DraggableTaskCardProps> = ({
	task,
}) => {
	const { attributes, listeners, setNodeRef, transform, isDragging } =
		useDraggable({
			id: task.id,
		});

	const style = {
		transform: transform
			? `translate3d(${transform.x}px, ${transform.y}px, 0)`
			: undefined,
	};

	const linkToDetails = `/task-details/${task.id}`;

	return (
		<div className='relative'>
			<div
				ref={setNodeRef}
				style={style}
				{...listeners}
				{...attributes}
				className='cursor-grab'
			>
				<TaskCard task={task} />
			</div>

			{!isDragging && (
				<NavLink
					to={linkToDetails}
					className='absolute bottom-2 right-2 p-3 px-4 text-sm text-gray-600 hover:text-gray-800 underline'
				>
					Details
				</NavLink>
			)}
		</div>
	);
};
