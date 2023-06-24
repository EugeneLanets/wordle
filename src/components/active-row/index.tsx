import { type ChangeEvent, type FocusEvent, forwardRef } from 'react';
import RowLayout from '../row-layout';
import classnames from '../../utils/classnames';
import { type ActiveRowProps } from '../../types/rows';

const ActiveRow = forwardRef<HTMLInputElement, ActiveRowProps>(
  function ActiveRow(props, ref) {
    const { row, onChange } = props;
    const cn = classnames('RowLayout');

    const callbacks = {
      onChange: (evt: ChangeEvent<HTMLInputElement>) => {
        onChange(row.id, evt.target);
      },
      onFocus: (evt: FocusEvent<HTMLInputElement>) => {
        evt.target.select();
      },
    };

    return (
      <form>
        <RowLayout>
          <button type={'reset'} className={cn('button')}>
            a
          </button>
          {row.cells.map((cell, idx) => (
            <input
              key={cell.id}
              className={cn('cell')}
              value={cell.letter}
              name={cell.id}
              onChange={callbacks.onChange}
              onFocus={callbacks.onFocus}
              ref={idx === 0 ? ref : null}
              maxLength={1}
            />
          ))}
          <button type={'submit'} className={cn('button')}>
            a
          </button>
        </RowLayout>
      </form>
    );
  }
);


export default ActiveRow;

