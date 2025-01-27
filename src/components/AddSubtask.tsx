import { InputField } from './FormInputs/InputField';

interface AddSubtaskProps {
	subtaskTitle: string;
	onAddSubtask: () => void;
	onChangeSubtaskTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddSubtask: React.FC<AddSubtaskProps> = ({
	subtaskTitle,
	onAddSubtask,
	onChangeSubtaskTitle,
}) => {
	return (
		<div className='flex items-end gap-2'>
			<div className='flex-grow'>
				<InputField
					label='Subtasks'
					value={subtaskTitle}
					onChange={onChangeSubtaskTitle}
					placeholder='Subtask title'
				/>
			</div>

			<button
				type='button'
				onClick={onAddSubtask}
				className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
			>
				Add
			</button>
		</div>
	);
};
