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

export enum Status {
  Absent = 'absent',
  Present = 'present',
  Correct = 'correct',
}

export interface StatusCell {
  letter: string;
  status: Status;
  id: string;
}

export interface RowProps {
  cells: StatusCell[];
}

export interface ActiveRowProps {
  row: IRow;
}

export interface CellChangePayload {
  letter: string;
  row: string;
  cell: string;
}
