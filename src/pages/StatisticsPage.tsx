import { Outlet } from 'react-router';
import { NavItem } from '../components/NavItem';
import { Wrapper } from '../components/Wrapper';

export const StatisticsPage: React.FC = () => {
	return (
		<Wrapper>
			<div className='container mx-auto p-4'>
				<h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
					Task Statistics Dashboard
				</h2>

				<div className='flex flex-col md:flex-row gap-4'>
					<nav className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-60 flex flex-col md:flex-col gap-2 overflow-x-auto'>
						<NavItem to='' icon='📊' label='Overview' />
						<NavItem to='tasks-status' icon='📌' label='Task Status' />
						<NavItem to='trends' icon='📈' label='Completion Trends' />
					</nav>
					<div className='flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-md'>
						<Outlet />
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
