import { type FC } from 'react';
import useAppSelector from '../../hooks/use-app-selector';

import Row from '../row';
import ActiveRow from '../active-row';

import { type IRow } from '../../types/rows';

import getStatus from '../../utils/get-status';

const Game: FC = () => {
  const rows: IRow[] = useAppSelector((state) => state.rows.rows);
  const activeRowId = useAppSelector((state) => state.game.activeRow.id);
  const answer = useAppSelector((state) => state.game.answer);

  return (
    <div>
      {rows.map((row) =>
        row.id === activeRowId ? (
          <ActiveRow key={row.id} row={row} />
        ) : (
          <Row key={row.id} cells={getStatus(row.cells, answer)} />
        )
      )}
    </div>
  );
};

export default Game;
