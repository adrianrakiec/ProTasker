import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addTask, clearTasks } from '../store/tasksSlice';
import { Wrapper } from '../components/Wrapper';
import { isValidTaskArray } from '../helpers/importValidate';
import { FileUpload } from '../components/FormInputs/FileUpload';
import { toastService } from '../helpers/toastify';

export const ImportExportPage: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	const handleExport = () => {
		const jsonTasks = JSON.stringify(tasks);
		const blob = new Blob([jsonTasks], { type: 'application/json' });
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = 'tasks.json';
		link.click();
	};

	const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const selectedFile = event.target.files[0];

			const reader = new FileReader();
			reader.onload = () => {
				try {
					const importedTasks = JSON.parse(reader.result as string);

					if (isValidTaskArray(importedTasks)) {
						dispatch(clearTasks());
						importedTasks.forEach(task => dispatch(addTask(task)));
					} else {
						throw new Error('Invalid file format');
					}

					navigate('/');
					toastService.success('Tasks successfully imported!');
				} catch (e) {
					console.error(e);
					toastService.error(
						'Failed to import tasks. Please check the file format.'
					);
				}
			};
			reader.readAsText(selectedFile);
		}
	};

	return (
		<Wrapper>
			<div className='container mx-auto p-4'>
				<h2 className='text-2xl font-semibold mb-6'>Import / Export Tasks</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
					<div className='p-4 border rounded-md bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700'>
						<h3 className='text-xl font-medium mb-2 text-gray-900 dark:text-white'>
							Export Tasks
						</h3>
						<p className='mb-4 text-gray-700 dark:text-gray-300'>
							Click the button below to export tasks as a JSON file.
						</p>
						<button
							onClick={handleExport}
							className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700'
						>
							Export as JSON
						</button>
					</div>

					<div className='p-4 border rounded-md bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700'>
						<h3 className='text-xl font-medium mb-2 text-gray-900 dark:text-white'>
							Import Tasks
						</h3>
						<p className='mb-4 text-gray-700 dark:text-gray-300'>
							Upload a JSON file to import tasks.
						</p>
						<FileUpload onChange={handleImport} />
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
