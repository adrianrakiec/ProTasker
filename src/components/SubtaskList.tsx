import { calculateCompletionPercentage } from '../helpers/calculateCompletionPercentage';
import { Subtask } from '../types/Task';
import { AddSubtask } from './AddSubtask';

interface SubtaskListProps {
	subtasks: Subtask[];
	isEditing: boolean;
	subtaskTitle: string;
	onToggleSubtaskStatus: (id: string) => void;
	onRemoveSubtask: (id: string) => void;
	onChangeInputValue: (field: string, value: string) => void;
	onAddSubtask: (id: string) => void;
}

export const SubtaskList: React.FC<SubtaskListProps> = ({
	subtasks,
	isEditing,
	onToggleSubtaskStatus,
	onRemoveSubtask,
	onChangeInputValue,
	subtaskTitle,
	onAddSubtask,
}) => {
	return (
		<div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
			<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
				Subtasks:
				{subtasks.length > 0 &&
					` (${calculateCompletionPercentage(subtasks)}% completed)`}
			</h3>

			{subtasks.length > 0 ? (
				<ul className='space-y-2 max-h-96 overflow-y-auto'>
					{subtasks.map(subtask => (
						<li
							key={subtask.id}
							className='flex justify-between items-center bg-white dark:bg-gray-700 px-3 py-2 rounded shadow cursor-pointer '
							onClick={() => onToggleSubtaskStatus(subtask.id)}
						>
							{subtask.completed && (
								<span className='mx-2 text-green-500'>✓</span>
							)}
							<div
								className={`mr-auto ${
									subtask.completed ? 'line-through text-gray-500' : ''
								}`}
							>
								{subtask.title}
							</div>

							{isEditing && (
								<button
									type='button'
									onClick={() => onRemoveSubtask(subtask.id)}
									className='text-red-500 hover:underline px-3 font-bold'
								>
									X
								</button>
							)}
						</li>
					))}
				</ul>
			) : (
				<p className='text-gray-500 dark:text-gray-400'>
					No subtasks available. Add one in edit mode.
				</p>
			)}

			{isEditing && (
				<div className='mt-4'>
					<AddSubtask
						subtaskTitle={subtaskTitle}
						label='Add subtask'
						onChangeSubtaskTitle={e =>
							onChangeInputValue('subtaskTitle', e.target.value)
						}
						onAddSubtask={() => onAddSubtask(Date.now().toString())}
					/>
				</div>
			)}
		</div>
	);
};
