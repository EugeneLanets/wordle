import './RowInput.css';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import classNames from 'classnames';
import {
  focusOnNextInput,
  focusOnPreviousInput,
  getClassName,
  isInputValid,
} from './helpers';
import { useSelector } from 'react-redux';
import { ICell, RootState } from '../../interfaces';

const RowInput = () => {
  // const [cells, setCells] = useState(
  //   Array.from({ length: 5 }, (_, idx) => ({
  //     value: '',
  //     id: `row${idx}`,
  //   }))
  // );

  const cells = useSelector((state: RootState): ICell[] => state.rowInput);

  const [errorCellId, setErrorCellId] = useState('');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    if (!value.length) return;

    if (!isInputValid(value)) {
      setErrorCellId(name);
      return;
    }

    setCells(
      cells.map((cell) =>
        cell.id === name
          ? {
              id: cell.id,
              value: value === 'ё' ? 'е' : value.toLowerCase(),
            }
          : cell
      )
    );
    setErrorCellId('');
    focusOnNextInput(evt.target);
  };
  const handleKeyUp = (evt: KeyboardEvent<HTMLInputElement>) => {
    const { name } = evt.currentTarget;
    const { key } = evt;
    if (key !== 'Backspace' && key !== 'Delete') {
      return;
    }
    setCells(
      cells.map((cell) => {
        return cell.id === name ? { id: cell.id, value: '' } : cell;
      })
    );
    focusOnPreviousInput(evt.currentTarget);
    setErrorCellId('');
  };

  return (
    <form className='rowInput'>
      <button type='reset'>Reset</button>
      {cells.map((cell, idx) => (
        <input
          type='text'
          className={getClassName(cell.id, errorCellId)}
          maxLength={1}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          value={cell.value}
          key={cell.id}
          name={cell.id}
        />
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default RowInput;
