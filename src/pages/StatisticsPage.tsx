import { Wrapper } from '../components/Wrapper';
import { Outlet } from 'react-router';

export const StatisticsPage: React.FC = () => {
	return (
		<Wrapper>
			<div className='container mx-auto p-4'>
				<h2 className='text-2xl font-semibold mb-4'>
					Task Statistics Dashboard
				</h2>
				<Outlet />
			</div>
		</Wrapper>
	);
};
