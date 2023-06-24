import { type FC } from 'react';
import RowLayout from '../row-layout';
import classnames from '../../utils/classnames';
import { type RowProps } from '../../types/rows';

const Row: FC<RowProps> = ({ row }: RowProps) => {
  const cn = classnames('RowLayout');
  return (
    <RowLayout>
      {row.cells.map((cell) => (
        <span key={cell.id} className={cn('cell')}>
          {cell.letter}
        </span>
      ))}
    </RowLayout>
  );
};

export default Row;
