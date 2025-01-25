interface ViewToggleButtonProps {
	isBoardView: boolean;
	onToggle: () => void;
}

export const ViewToggleButton: React.FC<ViewToggleButtonProps> = ({
	isBoardView,
	onToggle,
}) => {
	return (
		<button
			onClick={onToggle}
			className='flex items-center justify-center gap-2 px-4 py-2 text-gray-800 dark:text-white font-medium text-sm rounded-lg transition'
		>
			{isBoardView ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<rect x='3' y='3' width='7' height='7' />
					<rect x='14' y='3' width='7' height='7' />
					<rect x='14' y='14' width='7' height='7' />
					<rect x='3' y='14' width='7' height='7' />
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<line x1='8' y1='6' x2='21' y2='6' />
					<line x1='8' y1='12' x2='21' y2='12' />
					<line x1='8' y1='18' x2='21' y2='18' />
					<circle cx='4' cy='6' r='1' />
					<circle cx='4' cy='12' r='1' />
					<circle cx='4' cy='18' r='1' />
				</svg>
			)}
			<span>{isBoardView ? 'Board View' : 'List View'}</span>
		</button>
	);
};
