import {
  type ChangeEvent,
  type FC,
  type FocusEvent,
  type FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import RowLayout from '../row-layout';
import classnames from '../../utils/classnames';
import { type ActiveRowProps } from '../../types/rows';
import isRussianLetter from '../../utils/is-russian-letter';
import goToNextElement from '../../utils/go-to-next-element';
import useAppDispatch from '../../hooks/use-app-dispatch';

import { resetRow, setCell } from '../../services/store/reducers/rows';
import { setNextRowActive } from '../../services/store/reducers/game';

const ActiveRow: FC<ActiveRowProps> = (props) => {
  const { row } = props;
  const [errorCell, setErrorCell] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const cn = classnames('RowLayout');

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  const callbacks = {
    onChange: (evt: ChangeEvent<HTMLInputElement>) => {
      const input = evt.target;
      const letter = input.value.toLowerCase();
      const isLetterEmpty = letter === '';
      const isLetterValid = isRussianLetter(letter) || isLetterEmpty;

      if (!isLetterValid) {
        setErrorCell(evt.target.name);
        return;
      }

      setErrorCell(null);
      dispatch(setCell({ row: row.id, cell: input.name, letter }));

      if (!isLetterEmpty) {
        goToNextElement(input);
      }
    },

    onFocus: (evt: FocusEvent<HTMLInputElement>) => {
      evt.target.select();
    },

    onReset: (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      dispatch(resetRow(row.id));
    },

    onSubmit: (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      dispatch(setNextRowActive());
    },
  };

  const options = {
    rowLength: useMemo(() => {
      return row.cells.map((cell) => cell.letter).join('').length;
    }, [row]),
  };

  return (
    <form onSubmit={callbacks.onSubmit} onReset={callbacks.onReset}>
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
};


export default ActiveRow;

