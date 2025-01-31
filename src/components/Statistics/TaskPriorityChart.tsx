import { useSelector } from 'react-redux';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { RootState } from '../../store';

const priorityColors: Record<string, string> = {
	low: '#4CAF50',
	medium: '#FFEB3B',
	high: '#F44336',
};

export const TaskPriorityChart: React.FC = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	const taskCounts = tasks.reduce<Record<string, number>>((acc, task) => {
		acc[task.priority] = (acc[task.priority] || 0) + 1;
		return acc;
	}, {});

	const chartData = [taskCounts];

	return (
		<div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
			<h2 className='text-xl font-semibold text-center mb-4 text-gray-700 dark:text-white'>
				Task Priority Overview
			</h2>
			<ResponsiveContainer width='100%' height={300}>
				<BarChart data={chartData}>
					<XAxis dataKey='priority' stroke='#ddd' />
					<YAxis allowDecimals={false} />
					<Tooltip />
					<Legend />
					{Object.entries(priorityColors).map(([status, color]) => (
						<Bar key={status} dataKey={status} fill={color} name={status} />
					))}
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};
