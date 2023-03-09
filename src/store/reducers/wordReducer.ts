import { createSlice } from '@reduxjs/toolkit';

const wordSlice = createSlice({
  name: 'word',
  initialState: 'слово',
  reducers: {
    updateWord(state, action) {
      state = action.payload;
    },
  },
});

export const { updateWord } = wordSlice.actions;
export default wordSlice.reducer;
