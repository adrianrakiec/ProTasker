interface SelectFieldProps {
	label: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	options: string[];
	disabled?: boolean;
}

export const SelectField: React.FC<SelectFieldProps> = ({
	label,
	value,
	onChange,
	options,
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
			<select
				id={label}
				value={value}
				onChange={onChange}
				disabled={disabled}
				className='w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
			>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</>
	);
};
