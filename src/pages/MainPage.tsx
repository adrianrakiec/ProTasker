import { KanbanBoard } from '../components/KanbanBoard';
import { Wrapper } from '../components/Wrapper';
import { Task } from '../types/Task';

export const MainPage = () => {
	const tasks: Task[] = [
		{
			id: '1',
			title: 'Setup project',
			status: 'todo',
			priority: 'high',
			dueDate: '2025-01-25',
		},
		{
			id: '2',
			title: 'Create Kanban layout',
			status: 'in-progress',
			priority: 'medium',
		},
		{
			id: '3',
			title: 'Refactor components',
			status: 'done',
			priority: 'low',
			dueDate: '2025-01-20',
		},
	];

	return (
		<main>
			<Wrapper>
				<KanbanBoard tasks={tasks} />
			</Wrapper>
		</main>
	);
};
