import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import {
  type CellChangePayload,
  type ICell,
  type RowsState,
} from '../../../../types/rows';

const initialState: RowsState = {
  rows: Array.from({ length: 6 }, (_, idx) => ({
    id: `row${idx}`,
    cells: Array.from({ length: 5 }, (__, i) => ({
      id: `row${idx}cell${i}`,
      letter: 'f',
    })),
  })),
};

const rowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    setCell(state, action: PayloadAction<CellChangePayload>) {
      const { row, cell, letter } = action.payload;
      const currentRow = state.rows.find((item) => item.id === row);
      const currentCell = currentRow?.cells.find((item) => item.id === cell);
      (currentCell as ICell).letter = letter;
    },
  },
});
export const { setCell } = rowsSlice.actions;
export default rowsSlice.reducer;
