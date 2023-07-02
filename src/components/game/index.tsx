import { type FC, type FormEvent, useEffect, useRef } from 'react';
import useAppSelector from '../../hooks/use-app-selector';
import { resetRow, setCell } from '../../services/store/reducers/rows';
import Row from '../row';
import ActiveRow from '../active-row';
import useAppDispatch from '../../hooks/use-app-dispatch';
import { type IRow } from '../../types/rows';
import goToNextElement from '../../utils/go-to-next-element';
import { setNextRowActive } from '../../services/store/reducers/game';

const Game: FC = () => {
  const rows: IRow[] = useAppSelector((state) => state.rows.rows);
  const activeRowIndex = useAppSelector((state) => state.game.activeRow.index);
  const activeRow = 'row' + String(activeRowIndex);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const callbacks = {
    onChange: (rowId: string, element: HTMLInputElement) => {
      const { name, value } = element;
      dispatch(setCell({ row: rowId, cell: name, letter: value }));
      goToNextElement(element);
    },
    onSubmit: (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      dispatch(setNextRowActive());
    },
    onReset: (rowId: string) => {
      dispatch(resetRow(rowId));
    },
  };

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  return (
    <div>
      {rows.map((row) =>
        row.id === activeRow ? (
          <ActiveRow
            key={row.id}
            row={row}
            onChange={callbacks.onChange}
            ref={ref}
            onSubmit={callbacks.onSubmit}
            onReset={callbacks.onReset}
          />
        ) : (
          <Row key={row.id} row={row} />
        )
      )}
    </div>
  );
};

export default Game;
