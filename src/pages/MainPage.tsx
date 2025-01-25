import { Outlet } from 'react-router';
import { Wrapper } from '../components/Wrapper';
import { Navbar } from '../components/Navbar';

export const MainPage = () => {
	return (
		<main>
			<Wrapper>
				<Navbar />
				<Outlet />
			</Wrapper>
		</main>
	);
};
