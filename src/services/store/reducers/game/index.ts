import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeRow: {
    index: 0,
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setNextRowActive(state) {
      state.activeRow.index += 1;
    },
  },
});

export const { setNextRowActive } = gameSlice.actions;
export default gameSlice.reducer;
