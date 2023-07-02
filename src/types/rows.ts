import { type FormEvent, FormEventHandler } from 'react';

export interface ICell {
  id: string;
  letter: string;
}

export interface IRow {
  id: string;
  cells: ICell[];
}

export interface RowsState {
  rows: IRow[];
}

export interface RowProps {
  row: IRow;
}

export interface ActiveRowProps extends RowProps {
  onChange: (rowId: string, element: HTMLInputElement) => void;
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
}

export interface CellChangePayload {
  letter: string;
  row: string;
  cell: string;
}
