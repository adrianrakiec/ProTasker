export const calculateCompletionPercentage = (
	subtasks: { completed: boolean }[]
) => {
	if (subtasks.length === 0) {
		return 0;
	}

	const completedCount = subtasks.filter(subtask => subtask.completed).length;
	return ((completedCount / subtasks.length) * 100).toFixed(2);
};
