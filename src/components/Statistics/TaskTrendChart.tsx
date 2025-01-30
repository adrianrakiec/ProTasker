import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import { Task } from '../../types/Task';

interface TaskTrendsChartProps {
	tasks: Task[];
}

export const TaskTrendsChart: React.FC<TaskTrendsChartProps> = ({ tasks }) => {
	const completedTasksByDate = tasks
		.filter(task => task.status === 'done')
		.reduce((acc: Record<string, number>, task) => {
			const date = task.completionDate as string;
			acc[date] = (acc[date] || 0) + 1;
			return acc;
		}, {});

	const sortedData = Object.entries(completedTasksByDate)
		.map(([date, count]) => ({ date, count }))
		.sort((a, b) => a.date.localeCompare(b.date));

	return (
		<div className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
			<h2 className='text-xl font-semibold text-center mb-4 text-gray-700 dark:text-white'>
				Task Completion Trends
			</h2>
			<ResponsiveContainer width='100%' height={300}>
				<LineChart data={sortedData}>
					<XAxis
						dataKey='date'
						stroke='#4B5563'
						tick={{ fill: '#4B5563' }}
						tickLine={false}
						axisLine={{ stroke: '#4B5563' }}
					/>
					<YAxis allowDecimals={false} stroke='#4B5563' />
					<Tooltip />
					<Line
						type='monotone'
						dataKey='count'
						stroke='#10B981'
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
