import { useState } from 'react';
import { KanbanBoard } from '../components/KanbanBoard';
import { Wrapper } from '../components/Wrapper';
import { Task } from '../types/Task';
import { Navbar } from '../components/Navbar';

export const MainPage = () => {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: '1',
			title: 'Task 1',
			priority: 'low',
			status: 'todo',
			dueDate: '2025-01-25',
		},
		{ id: '2', title: 'Task 2', priority: 'medium', status: 'in-progress' },
		{
			id: '3',
			title: 'Task 3',
			priority: 'high',
			status: 'done',
			dueDate: '2025-01-20',
		},
	]);

	return (
		<main>
			<Wrapper>
				<Navbar />
				<KanbanBoard tasks={tasks} setTasks={setTasks} />
			</Wrapper>
		</main>
	);
};
