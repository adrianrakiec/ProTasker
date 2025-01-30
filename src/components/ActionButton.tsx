interface ActionButtonProps {
	handleClick: (() => void) | ((e: React.FormEvent) => void);
	label: string;
	actionType?: 'edit' | 'delete' | 'save';
}

export const ActionButton: React.FC<ActionButtonProps> = ({
	handleClick,
	label,
	actionType,
}) => {
	let buttonColor = '';

	switch (actionType) {
		case 'edit':
			buttonColor = 'bg-blue-500 hover:bg-blue-600 text-white ';
			break;
		case 'delete':
			buttonColor = 'bg-red-500 hover:bg-red-600 text-white ';
			break;
		case 'save':
			buttonColor = 'bg-green-500 hover:bg-green-600 text-white ';
			break;
		default:
			buttonColor = 'bg-gray-300 hover:bg-gray-400 text-gray-900';
	}

	return (
		<button
			type='button'
			className={`px-4 py-2 rounded ${buttonColor}`}
			onClick={handleClick}
		>
			{label}
		</button>
	);
};
