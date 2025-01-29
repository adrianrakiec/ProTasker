import { NavLink } from 'react-router';
import { ViewToggleButton } from './ViewToggleBtn';

interface TaskToolbarProps {
	isBoardView: boolean;
	onToggle: () => void;
}

export const TaskToolbar: React.FC<TaskToolbarProps> = ({
	isBoardView,
	onToggle,
}) => (
	<div className='flex items-center gap-4 p-2 mt-2 text-xl'>
		<div className='ml-auto'>
			<ViewToggleButton isBoardView={isBoardView} onToggle={onToggle} />
		</div>
		<NavLink
			to='/create-task'
			className='text-lg font-semibold text-white bg-blue-600 rounded-lg px-6 py-2 hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg'
		>
			Add Task
		</NavLink>
	</div>
);
