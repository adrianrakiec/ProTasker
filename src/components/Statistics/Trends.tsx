import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { TaskTrendsChart } from './TaskTrendChart';
import {
	getSortedCompletionData,
	DateRange,
} from '../../helpers/statisticsHelpers';
import { SelectField } from '../FormInputs/SelectField';

export const Trends: React.FC = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);
	const [dateRange, setDateRange] = useState<DateRange>('all');

	const sortedData = getSortedCompletionData(tasks, dateRange);

	return (
		<div className='p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
			<h2 className='text-xl font-semibold text-center mb-4 text-gray-700 dark:text-white'>
				Task Completion Trends
			</h2>
			<div className='flex justify-start mb-4'>
				<div className='w-48'>
					<SelectField
						label='Time'
						value={dateRange}
						onChange={e => setDateRange(e.target.value as DateRange)}
						options={['last7Days', 'thisMonth', 'all']}
					/>
				</div>
			</div>
			<div className='mb-6'>
				<TaskTrendsChart data={sortedData} />
			</div>
		</div>
	);
};
