import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface PieChartComponentProps {
	data: { name: string; value: number }[];
	colors?: string[];
	title?: string;
}

const DEFAULT_COLORS = ['#10B981', '#EF4444', '#3B82F6', '#F59E0B', '#8B5CF6'];

export const PieChartComponent: React.FC<PieChartComponentProps> = ({
	data,
	colors = DEFAULT_COLORS,
	title,
}) => {
	return (
		<div className='flex flex-col items-center'>
			{title && <h3 className='text-lg font-semibold mb-2'>{title}</h3>}
			<PieChart width={250} height={250}>
				<Pie
					data={data}
					cx='50%'
					cy='50%'
					outerRadius={80}
					dataKey='value'
					label
				>
					{data.map((_, index) => (
						<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
					))}
				</Pie>
				<Tooltip contentStyle={{ marginLeft: '10px' }} />
				<Legend />
			</PieChart>
		</div>
	);
};
