import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

interface TaskTrendsChartProps {
	data: {
		date: string;
		count: number;
	}[];
}

export const TaskTrendsChart: React.FC<TaskTrendsChartProps> = ({ data }) => {
	return (
		<div className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
			<ResponsiveContainer width='100%' height={300}>
				<LineChart data={data}>
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
