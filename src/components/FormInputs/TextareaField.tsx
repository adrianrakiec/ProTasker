interface TextareaFieldProps {
	label: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	rows?: number;
	placeholder?: string;
	disabled?: boolean;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
	label,
	value,
	onChange,
	rows = 3,
	placeholder = '',
	disabled = false,
}) => {
	return (
		<>
			<label
				htmlFor={label}
				className='block text-gray-800 dark:text-white font-medium mb-2'
			>
				{label}
			</label>
			<textarea
				id={label}
				value={value}
				onChange={onChange}
				rows={rows}
				placeholder={placeholder}
				disabled={disabled}
				className='w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
		</>
	);
};
