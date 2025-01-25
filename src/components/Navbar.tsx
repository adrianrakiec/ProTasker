import { NavLink } from 'react-router';

export const Navbar: React.FC = () => (
	<nav className='flex items-center gap-4 p-2 mt-2 text-xl'>
		<NavLink to='/' className='text-gray-800 dark:text-white'>
			Your tasks
		</NavLink>
		<NavLink to='/' className='text-gray-800 dark:text-white'>
			Stats
		</NavLink>
		<NavLink to='/list' className='text-gray-800 dark:text-white'>
			List
		</NavLink>
		<NavLink
			to='/create-task'
			className='ml-auto text-lg font-semibold text-white bg-blue-600 rounded-lg px-6 py-2 hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg'
		>
			Add Task
		</NavLink>
	</nav>
);
