import { createSlice } from '@reduxjs/toolkit';
import { ICell } from '../../interfaces';

const initialState = Array.from(
  { length: 5 },
  (_, idx): ICell => ({
    value: '',
    hasError: false,
    id: `cell${idx}`,
  })
);

const rowInputSlice = createSlice({
  name: 'rowInput',
  initialState,
  reducers: {
    updateCellError(state, action) {
      const id = action.payload;
      const errorCell = state.find((cell) => cell.id === id);
      if (!errorCell) return;
      errorCell.hasError = true;
    },
    resetError(state) {
      return state.map((cell) => ({ ...cell, hasError: false }));
    },
    updateCellValue(state, action) {
      const { id, value } = action.payload;
      const newCell = state.find((cell) => cell.id === id);
      if (!newCell) return;
      newCell.value = value;
    },
  },
});

export const { updateCellError, resetError, updateCellValue } =
  rowInputSlice.actions;
export default rowInputSlice.reducer;
