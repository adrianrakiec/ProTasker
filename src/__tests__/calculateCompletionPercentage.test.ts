import { calculateCompletionPercentage } from '../helpers/calculateCompletionPercentage';
import { Subtask } from '../types/Task';

describe('calculateCompletionPercentage', () => {
	it('should return 0 for empty subtask array', () => {
		const subtasks: Subtask[] = [];
		const result = calculateCompletionPercentage(subtasks);
		expect(result).toBe(0);
	});

	it('should return correct percentage for mixed subtasks (some completed, some not)', () => {
		const subtasks = [
			{ completed: true },
			{ completed: false },
			{ completed: true },
		];
		const result = calculateCompletionPercentage(subtasks);
		expect(result).toBe('66.67');
	});

	it('should return 100% if all subtasks are completed', () => {
		const subtasks = [
			{ completed: true },
			{ completed: true },
			{ completed: true },
		];
		const result = calculateCompletionPercentage(subtasks);
		expect(result).toBe('100.00');
	});

	it('should return 0% if no subtasks are completed', () => {
		const subtasks = [
			{ completed: false },
			{ completed: false },
			{ completed: false },
		];
		const result = calculateCompletionPercentage(subtasks);
		expect(result).toBe('0.00');
	});
});
