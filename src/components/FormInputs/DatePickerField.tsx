interface DatePickerFieldProps {
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	value?: string;
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
	label,
	onChange,
	disabled = false,
	value,
}) => {
	const today = new Date().toISOString().split('T')[0];

	return (
		<>
			<label
				htmlFor={label}
				className='block text-gray-800 dark:text-white font-medium mb-2'
			>
				{label}
			</label>
			<input
				id={label}
				type='date'
				min={today}
				value={value}
				onChange={onChange}
				disabled={disabled}
				className='w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
		</>
	);
};
