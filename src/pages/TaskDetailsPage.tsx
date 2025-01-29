import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Wrapper } from '../components/Wrapper';
import { TaskEditForm } from '../components/TaskEditForm';
import { NotFoundPage } from './NotFoundPage';

export const TaskDetailsPage = () => {
	const { id } = useParams<{ id: string }>();

	const task = useSelector((state: RootState) =>
		state.tasks.tasks.find(task => task.id === id)
	);

	if (!task) {
		return <NotFoundPage />;
	}

	return (
		<section>
			<Wrapper>
				<TaskEditForm task={task} />
			</Wrapper>
		</section>
	);
};
