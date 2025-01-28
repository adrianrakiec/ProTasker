import { useParams, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Wrapper } from '../components/Wrapper';
import { TaskEditForm } from '../components/TaskEditForm';

export const TaskDetailsPage = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const task = useSelector((state: RootState) =>
		state.tasks.tasks.find(task => task.id === id)
	);

	if (!task) {
		return (
			<div className='text-center mt-20'>
				<h2 className='text-2xl font-bold text-red-500'>Task not found</h2>
				<p className='text-gray-600 dark:text-gray-400'>
					The task you're looking for doesn't exist.
				</p>
				<button
					onClick={() => navigate('/')}
					className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
				>
					Go Back
				</button>
			</div>
		);
	}

	return (
		<section>
			<Wrapper>
				<TaskEditForm task={task} />
			</Wrapper>
		</section>
	);
};
