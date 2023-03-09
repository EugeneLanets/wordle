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
  reducers: {},
});

export default rowInputSlice.reducer;
