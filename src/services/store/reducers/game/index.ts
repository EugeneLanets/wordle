import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    activeRow: 'row2',
  },
  reducers: {},
});

export default gameSlice.reducer;
