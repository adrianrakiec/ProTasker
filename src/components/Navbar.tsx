import { NavLink } from 'react-router';
import { Wrapper } from './Wrapper';
import { ToggleThemeButton } from './ToggleThemeButton';

interface NavbarProps {
	toggleTheme: () => void;
	isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
	return (
		<nav className='bg-gray-100 dark:bg-gray-800 px-6 py-4 shadow-md'>
			<Wrapper>
				<div className='flex items-center justify-between'>
					<div className='text-xl font-bold text-gray-800 dark:text-gray-100'>
						<NavLink to='/'>ProTasker</NavLink>
					</div>
					<ToggleThemeButton
						toggleTheme={toggleTheme}
						isDarkMode={isDarkMode}
					/>
				</div>
			</Wrapper>
		</nav>
	);
};
