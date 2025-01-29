import { BarChart3, Upload } from 'lucide-react';
import { NavItem } from './NavItem';

interface HamburgerMenuProps {
	onClose: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClose }) => {
	return (
		<div className='absolute right-0 mt-4 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden'>
			<ul className='flex flex-col text-gray-900 dark:text-white'>
				<li>
					<NavItem
						to='/statistics'
						icon={<BarChart3 size={20} />}
						label='Statistics'
						onClose={onClose}
					/>
				</li>
				<li>
					<NavItem
						to='/import-export'
						icon={<Upload size={20} />}
						label='Import/Export Tasks'
						onClose={onClose}
					/>
				</li>
			</ul>
		</div>
	);
};
