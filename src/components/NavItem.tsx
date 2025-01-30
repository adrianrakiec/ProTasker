import { NavLink } from 'react-router';

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
	<NavLink
		to={to}
		className={({ isActive }) =>
			`flex items-center gap-3 p-3 rounded transition ${
				isActive
					? 'bg-blue-500 text-white'
					: 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
			}`
		}
		onClick={onClose}
	>
		{icon}
		<span>{label}</span>
	</NavLink>
);
