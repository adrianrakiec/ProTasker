import { KanbanBoard } from '../components/KanbanBoard';
import { Wrapper } from '../components/Wrapper';
import { Navbar } from '../components/Navbar';

export const MainPage = () => {
	return (
		<main>
			<Wrapper>
				<Navbar />
				<KanbanBoard />
			</Wrapper>
		</main>
	);
};
