import { type FC, useEffect, useRef } from 'react';
import useAppSelector from '../../hooks/use-app-selector';
import { setCell } from '../../services/store/reducers/rows';
import Row from '../row';
import ActiveRow from '../active-row';
import useAppDispatch from '../../hooks/use-app-dispatch';
import { type IRow } from '../../types/rows';
import goToNextElement from '../../utils/go-to-next-element';

const Game: FC = () => {
  const rows: IRow[] = useAppSelector((state) => state.rows.rows);
  const activeRow = useAppSelector((state) => state.game.activeRow);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const callbacks = {
    onChange: (rowId: string, element: HTMLInputElement) => {
      const { name, value } = element;
      dispatch(setCell({ row: rowId, cell: name, letter: value }));
      goToNextElement(element);
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
          />
        ) : (
          <Row key={row.id} row={row} />
        )
      )}
    </div>
  );
};

export default Game;
