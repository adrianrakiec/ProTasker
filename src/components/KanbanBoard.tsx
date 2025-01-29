import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateTask } from '../store/tasksSlice';
import { RootState } from '../store';
import { TaskStatus } from '../types/TaskStatus';
import { KanbanColumn } from './KanbanColumn';
import { SECTIONS } from '../helpers/sectionName';

export const KanbanBoard: React.FC = () => {
	const columns = SECTIONS;

	const tasks = useSelector((state: RootState) => state.tasks.tasks);
	const dispatch = useDispatch();

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (!over) return;

		const activeTaskId = active.id.toString();
		const overColumnStatus = over.id as TaskStatus;

		dispatch(
			updateTask({
				id: activeTaskId,
				status: overColumnStatus,
			})
		);
	};

	return (
		<DndContext
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
			modifiers={[restrictToWindowEdges]}
		>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-4'>
				{columns.map(column => (
					<KanbanColumn
						key={column.status}
						column={column}
						tasks={tasks.filter(task => task.status === column.status)}
					/>
				))}
			</div>
		</DndContext>
	);
};
