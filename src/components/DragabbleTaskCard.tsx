import { useDraggable } from '@dnd-kit/core';
import { Task } from '../types/Task';
import { TaskCard } from './TaskCard';

interface DraggableTaskCardProps {
	task: Task;
}

export const DraggableTaskCard: React.FC<DraggableTaskCardProps> = ({
	task,
}) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: task.id,
	});

	const style = {
		transform: transform
			? `translate3d(${transform.x}px, ${transform.y}px, 0)`
			: undefined,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			className='cursor-grab'
		>
			<TaskCard task={task} />
		</div>
	);
};
