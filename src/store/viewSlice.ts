import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ViewState {
	isBoardView: boolean;
}

const initialState: ViewState = {
	isBoardView: true,
};

const viewSlice = createSlice({
	name: 'view',
	initialState,
	reducers: {
		toggleView: state => {
			state.isBoardView = !state.isBoardView;
		},
		setView: (state, action: PayloadAction<boolean>) => {
			state.isBoardView = action.payload;
		},
	},
});

export const { toggleView, setView } = viewSlice.actions;

export default viewSlice.reducer;
