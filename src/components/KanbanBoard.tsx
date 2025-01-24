import React from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { Task } from '../types/Task';
import { TaskStatus } from '../types/TaskStatus';
import { KanbanColumn } from './KanbanColumn';

interface KanbanBoardProps {
	tasks: Task[];
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({
	tasks,
	setTasks,
}) => {
	const columns = [
		{ title: 'Todo', status: 'todo' },
		{ title: 'In Progress', status: 'in-progress' },
		{ title: 'Done', status: 'done' },
	];

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (!over) return;

		const activeTaskId = active.id;
		const overColumnStatus = over.id;

		setTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === activeTaskId
					? { ...task, status: overColumnStatus as TaskStatus }
					: task
			)
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
