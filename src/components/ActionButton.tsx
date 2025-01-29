interface ActionButtonProps {
	handleClick: (() => void) | ((e: React.FormEvent) => void);
	label: string;
	actionType: 'edit' | 'delete' | 'save';
}

export const ActionButton: React.FC<ActionButtonProps> = ({
	handleClick,
	label,
	actionType,
}) => {
	let buttonColor = '';

	switch (actionType) {
		case 'edit':
			buttonColor = 'bg-blue-500 hover:bg-blue-600';
			break;
		case 'delete':
			buttonColor = 'bg-red-500 hover:bg-red-600';
			break;
		case 'save':
			buttonColor = 'bg-green-500 hover:bg-green-600';
			break;
		default:
			buttonColor = 'bg-gray-500 hover:bg-gray-600';
	}

	return (
		<button
			type='button'
			className={`text-white px-4 py-2 rounded ${buttonColor}`}
			onClick={handleClick}
		>
			{label}
		</button>
	);
};
