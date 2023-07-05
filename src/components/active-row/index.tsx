import {
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
  forwardRef,
  useMemo,
  useState,
} from 'react';
import RowLayout from '../row-layout';
import classnames from '../../utils/classnames';
import { type ActiveRowProps } from '../../types/rows';
import isRussianLetter from '../../utils/is-russian-letter';

const ActiveRow = forwardRef<HTMLInputElement, ActiveRowProps>(
  function ActiveRow(props, ref) {
    const { row, onChange, onSubmit, onReset } = props;
    const [errorCell, setErrorCell] = useState<string | null>(null);
    const cn = classnames('RowLayout');

    const callbacks = {
      onChange: (evt: ChangeEvent<HTMLInputElement>) => {
        const letter = evt.target.value.toLowerCase();
        const isLetterValid = isRussianLetter(letter);
        if (!isLetterValid && letter !== '') {
          setErrorCell(evt.target.name);
          return;
        }
        setErrorCell(null);
        onChange(row.id, evt.target);
      },
      onFocus: (evt: FocusEvent<HTMLInputElement>) => {
        evt.target.select();
      },
      onReset: (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onReset(row.id);
      },
    };

    const options = {
      rowLength: useMemo(() => {
        return row.cells.map((cell) => cell.letter).join('').length;
      }, [row]),
    };

    return (
      <form onSubmit={onSubmit} onReset={callbacks.onReset}>
        <RowLayout>
          <button
            type={'reset'}
            className={cn('button')}
            disabled={options.rowLength < 1}
          >
            x
          </button>
          {row.cells.map((cell, idx) => (
            <input
              key={cell.id}
              className={cn('cell', { error: errorCell === cell.id })}
              value={cell.letter}
              name={cell.id}
              onChange={callbacks.onChange}
              onFocus={callbacks.onFocus}
              ref={idx === 0 ? ref : null}
              maxLength={1}
            />
          ))}
          <button
            type={'submit'}
            className={cn('button')}
            disabled={options.rowLength !== 5}
          >
            v
          </button>
        </RowLayout>
      </form>
    );
  }
);


export default ActiveRow;

