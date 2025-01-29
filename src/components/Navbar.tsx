import { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Wrapper } from './Wrapper';
import { ToggleThemeButton } from './ToggleThemeButton';
import { HamburgerMenu } from './HamburgerMenu';

interface NavbarProps {
	toggleTheme: () => void;
	isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-gray-100 dark:bg-gray-800 px-6 py-4 shadow-md'>
			<Wrapper>
				<div className='flex items-center'>
					<div className='text-xl font-bold text-gray-800 dark:text-gray-100'>
						<NavLink to='/'>ProTasker</NavLink>
					</div>
					<div className='ml-auto mr-7'>
						<ToggleThemeButton
							toggleTheme={toggleTheme}
							isDarkMode={isDarkMode}
						/>
					</div>
					<div className='relative'>
						<button
							onClick={() => setIsOpen(prev => !prev)}
							className='p-2 rounded-md transition'
						>
							{isOpen ? <X size={30} /> : <Menu size={30} />}
						</button>
						{isOpen && <HamburgerMenu onClose={() => setIsOpen(false)} />}
					</div>
				</div>
			</Wrapper>
		</nav>
	);
};
