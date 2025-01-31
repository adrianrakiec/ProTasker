import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from 'recharts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const STATUS_COLORS: Record<string, string> = {
	todo: '#3B82F6',
	'in-progress': '#FBBF24',
	done: '#10B981',
};

export const TaskStatusChart: React.FC = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	const taskCounts = tasks.reduce<Record<string, number>>((acc, task) => {
		acc[task.status] = (acc[task.status] || 0) + 1;
		return acc;
	}, {});

	const chartData = [taskCounts];

	return (
		<div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
			<h2 className='text-xl font-semibold text-center mb-4 text-gray-700 dark:text-white'>
				Task Status Overview
			</h2>
			<ResponsiveContainer width='100%' height={300}>
				<BarChart data={chartData}>
					<XAxis dataKey='status' stroke='#ddd' tick={false} />
					<YAxis allowDecimals={false} />
					<Tooltip />
					<Legend />
					{Object.entries(STATUS_COLORS).map(([status, color]) => (
						<Bar key={status} dataKey={status} fill={color} name={status} />
					))}
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};
