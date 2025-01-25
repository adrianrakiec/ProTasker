import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { toggleView } from '../store/viewSlice';
import { Wrapper } from '../components/Wrapper';
import { Navbar } from '../components/Navbar';
import { KanbanBoard } from '../components/KanbanBoard';
import { TaskList } from '../components/TaskList';

export const MainPage = () => {
	const isBoardView = useSelector((state: RootState) => state.view.isBoardView);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<main>
			<Wrapper>
				<Navbar
					isBoardView={isBoardView}
					onToggle={() => dispatch(toggleView())}
				/>
				{isBoardView ? <KanbanBoard /> : <TaskList />}
			</Wrapper>
		</main>
	);
};
