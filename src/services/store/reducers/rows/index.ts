import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import {
  type CellChangePayload,
  type ICell,
  type IRow,
  type RowsState,
} from '../../../../types/rows';

const initialState: RowsState = {
  rows: Array.from({ length: 6 }, (_, idx) => ({
    id: `row${idx}`,
    cells: Array.from({ length: 5 }, (__, i) => ({
      id: `row${idx}cell${i}`,
      letter: '',
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
    resetRow(state, action: PayloadAction<string>) {
      const rowId = action.payload;
      const currentRow = state.rows.find((row) => row.id === rowId);
      (currentRow as IRow).cells.forEach((cell) => {
        cell.letter = '';
      });
    },
  },
});
export const { setCell } = rowsSlice.actions;
export default rowsSlice.reducer;
