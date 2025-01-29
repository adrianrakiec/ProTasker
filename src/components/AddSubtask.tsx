import { ActionButton } from './ActionButton';
import { InputField } from './FormInputs/InputField';

interface AddSubtaskProps {
	subtaskTitle: string;
	onAddSubtask: () => void;
	onChangeSubtaskTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
}

export const AddSubtask: React.FC<AddSubtaskProps> = ({
	subtaskTitle,
	onAddSubtask,
	onChangeSubtaskTitle,
	label,
}) => {
	return (
		<div className='flex items-end gap-2'>
			<div className='flex-grow'>
				<InputField
					label={label}
					value={subtaskTitle}
					onChange={onChangeSubtaskTitle}
					placeholder='Subtask title'
				/>
			</div>

			<ActionButton label='Add' actionType='edit' handleClick={onAddSubtask} />
		</div>
	);
};
