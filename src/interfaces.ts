export interface ICell {
  value: string;
  hasError: boolean;
  id: string;
}

export interface RootState {
  word: string;
  rowInput: ICell[];
}
