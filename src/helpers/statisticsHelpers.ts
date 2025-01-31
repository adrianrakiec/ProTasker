export type DateRange = 'last7Days' | 'thisMonth' | 'all';

const parseDateString = (dateString: string): Date | null => {
	const parts = dateString.split('.');
	if (parts.length !== 3) return null;

	const [day, month, year] = parts.map(Number);
	return new Date(year, month - 1, day);
};

const isDateInRange = (dateString: string, range: DateRange): boolean => {
	const taskDate = parseDateString(dateString);
	if (!taskDate) return false;

	const today = new Date();

	if (range === 'last7Days') {
		const sevenDaysAgo = new Date();
		sevenDaysAgo.setDate(today.getDate() - 7);
		return taskDate >= sevenDaysAgo && taskDate <= today;
	}

	if (range === 'thisMonth') {
		return (
			taskDate.getFullYear() === today.getFullYear() &&
			taskDate.getMonth() === today.getMonth()
		);
	}

	return true;
};

export const getCompletedTasksByDate = (
	tasks: { status: string; completionDate?: string }[]
) => {
	return tasks
		.filter(task => task.status === 'done' && task.completionDate)
		.reduce((acc: Record<string, number>, task) => {
			const date = task.completionDate as string;
			acc[date] = (acc[date] || 0) + 1;
			return acc;
		}, {});
};

export const getSortedCompletionData = (
	tasks: { status: string; completionDate?: string }[],
	range: DateRange
) => {
	const completedTasksByDate = tasks
		.filter(
			task =>
				task.status === 'done' &&
				task.completionDate &&
				isDateInRange(task.completionDate, range)
		)
		.reduce((acc: Record<string, number>, task) => {
			const date = task.completionDate as string;
			acc[date] = (acc[date] || 0) + 1;
			return acc;
		}, {});

	return Object.entries(completedTasksByDate)
		.map(([date, count]) => ({ date, count }))
		.sort((a, b) => {
			const dateA = parseDateString(a.date)?.getTime() ?? 0;
			const dateB = parseDateString(b.date)?.getTime() ?? 0;
			return dateA - dateB;
		});
};
