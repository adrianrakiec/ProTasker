import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { toggleView } from '../store/viewSlice';
import { Wrapper } from '../components/Wrapper';
import { TaskToolbar } from '../components/TaskToolbar';
import { KanbanBoard } from '../components/KanbanBoard';
import { TaskList } from '../components/TaskList';

export const MainPage = () => {
	const isBoardView = useSelector((state: RootState) => state.view.isBoardView);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<main>
			<Wrapper>
				<TaskToolbar
					isBoardView={isBoardView}
					onToggle={() => dispatch(toggleView())}
				/>
				{isBoardView ? <KanbanBoard /> : <TaskList />}
			</Wrapper>
		</main>
	);
};
