import { Link } from 'react-router';

interface NavItemProps {
	to: string;
	icon: React.ReactNode;
	label: string;
	onClose?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
	to,
	icon,
	label,
	onClose,
}) => (
	<Link
		to={to}
		className='flex items-center gap-3 p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition'
		onClick={onClose}
	>
		{icon}
		<span>{label}</span>
	</Link>
);
