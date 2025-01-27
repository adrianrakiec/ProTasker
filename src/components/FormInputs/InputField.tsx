interface InputFieldProps {
	label: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
	label,
	value,
	onChange,
	required = false,
	placeholder = '',
}) => {
	return (
		<>
			<label
				htmlFor={label}
				className='block text-gray-800 dark:text-white font-medium mb-2'
			>
				{label} {required && <span className='text-red-500'>*</span>}
			</label>
			<input
				id={label}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className='w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
				required={required}
			/>
		</>
	);
};
