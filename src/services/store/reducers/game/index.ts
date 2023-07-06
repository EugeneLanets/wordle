import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeRow: {
    index: 0,
    id: 'row0',
  },
  answer: 'плюха',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setNextRowActive(state) {
      state.activeRow.index += 1;
      state.activeRow.id = `row${state.activeRow.index}`;
    },
  },
});

export const { setNextRowActive } = gameSlice.actions;
export default gameSlice.reducer;
