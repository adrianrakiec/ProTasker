import {
	DateRange,
	getCompletedTasksByDate,
	getSortedCompletionData,
} from '../helpers/statisticsHelpers';

describe('getCompletedTasksByDate', () => {
	it('should correctly group completed tasks by date', () => {
		const tasks = [
			{ status: 'done', completionDate: '01.01.2025' },
			{ status: 'done', completionDate: '01.01.2025' },
			{ status: 'done', completionDate: '02.01.2025' },
			{ status: 'in-progress', completionDate: '02.01.2025' },
			{ status: 'done', completionDate: '03.01.2025' },
			{ status: 'done', completionDate: '' },
			{ status: 'done', completionDate: '01.01.2025' },
			{ status: 'todo', completionDate: '03.01.2025' },
		];

		const result = getCompletedTasksByDate(tasks);

		const expectedResult = {
			'01.01.2025': 3,
			'02.01.2025': 1,
			'03.01.2025': 1,
		};

		expect(result).toEqual(expectedResult);
	});

	it('should ignore tasks that are not completed or have no completionDate', () => {
		const tasks = [
			{ status: 'in-progress', completionDate: '01.01.2025' },
			{ status: 'todo', completionDate: '02.01.2025' },
			{ status: 'done', completionDate: '' },
			{ status: 'done', completionDate: '01.01.2025' },
		];

		const result = getCompletedTasksByDate(tasks);

		const expectedResult = {
			'01.01.2025': 1,
		};

		expect(result).toEqual(expectedResult);
	});

	it('should return an empty object if no tasks are completed', () => {
		const tasks = [
			{ status: 'todo', completionDate: '01.01.2025' },
			{ status: 'todo', completionDate: '02.01.2025' },
		];

		const result = getCompletedTasksByDate(tasks);

		const expectedResult = {};

		expect(result).toEqual(expectedResult);
	});
});

describe('getSortedCompletionData', () => {
	it('should return an empty array if no tasks match the criteria', () => {
		const tasks = [
			{ status: 'in-progress', completionDate: '01.01.2022' },
			{ status: 'todo', completionDate: '02.01.2022' },
		];

		const range: DateRange = 'last7Days';

		const result = getSortedCompletionData(tasks, range);
		expect(result).toEqual([]);
	});
});
