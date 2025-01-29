interface FileUploadProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onChange }) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='relative flex items-center justify-center w-full'>
				<input
					id='file-upload'
					type='file'
					accept='.json'
					onChange={onChange}
					className='absolute inset-0 opacity-0 cursor-pointer'
				/>
				<button
					type='button'
					className='flex items-center justify-center w-full px-6 py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300'
				>
					<span className='font-medium'>Choose File</span>
				</button>
			</div>
		</div>
	);
};
