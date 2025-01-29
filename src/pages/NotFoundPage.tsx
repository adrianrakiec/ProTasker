import { Link } from 'react-router';
import { useDarkMode } from '../hooks/useDarkMode';

export const NotFoundPage: React.FC = () => {
	const { isDarkMode } = useDarkMode(); //

	return (
		<div
			className={`flex flex-col items-center justify-center min-h-screen ${
				isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
			} text-center transition-colors duration-300`}
		>
			<h1 className='text-6xl font-bold text-red-500 mb-4'>404</h1>
			<h2 className='text-2xl font-semibold'>Page Not Found</h2>
			<p className='mt-2'>The page you are looking for does not exist.</p>
			<Link
				to='/'
				className='mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition'
			>
				Go Back Home
			</Link>
		</div>
	);
};
