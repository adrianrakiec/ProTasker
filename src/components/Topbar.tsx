import React from 'react';
import { NavLink } from 'react-router';
import { Wrapper } from './Wrapper';

interface TopbarProps {
	toggleTheme: () => void;
	isDarkMode: boolean;
}

export const Topbar: React.FC<TopbarProps> = ({ toggleTheme, isDarkMode }) => {
	return (
		<nav className='bg-gray-100 dark:bg-gray-800 px-6 py-4 shadow-md'>
			<Wrapper>
				<div className='flex items-center justify-between'>
					<div className='text-xl font-bold text-gray-800 dark:text-gray-100'>
						<NavLink to='/'>ProTasker</NavLink>
					</div>

					<button
						onClick={toggleTheme}
						className='flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition'
					>
						<span>{isDarkMode ? 'Light theme' : 'Dark theme'}</span>
						<span>
							{isDarkMode ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M12 3v1m0 16v1m9-9h-1M4 12H3m16.364-7.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707'
									/>
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9a9 9 0 01-9-9c0-4.97 4.03-9 9-9z'
									/>
								</svg>
							)}
						</span>
					</button>
				</div>
			</Wrapper>
		</nav>
	);
};
