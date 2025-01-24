export type TaskFormAction =
	| { type: 'SET_FIELD'; field: string; value: string }
	| { type: 'ADD_SUBTASK'; id: string }
	| { type: 'REMOVE_SUBTASK'; id: string }
	| { type: 'RESET_FORM' };
