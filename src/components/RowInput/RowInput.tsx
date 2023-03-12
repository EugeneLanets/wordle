import './RowInput.css';
import { ChangeEvent, KeyboardEvent } from 'react';
import { focusOnAnotherInput, getClassName, isInputValid } from './helpers';
import { useDispatch, useSelector } from 'react-redux';
import { ICell, RootState } from '../../interfaces';
import {
  resetError,
  updateCellError,
  updateCellValue,
} from '../../store/reducers/rowInputReducer';

const RowInput = () => {
  const dispatch = useDispatch();
  const cells = useSelector((state: RootState): ICell[] => state.rowInput);
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name: id, value } = target;
    dispatch(resetError());
    if (!value.length) return;

    if (!isInputValid(value)) {
      dispatch(updateCellError(id));
      return;
    }

    dispatch(updateCellValue({ id, value }));
    focusOnAnotherInput(target, 'forward');
  };
  const handleKeyUp = (evt: KeyboardEvent<HTMLInputElement>) => {
    const { key, currentTarget } = evt;
    const { name: id } = currentTarget;
    switch (key) {
      case 'Backspace':
      case 'Delete':
        dispatch(updateCellValue({ id, value: '' }));
        focusOnAnotherInput(currentTarget, 'backward');
        return;
      case 'ArrowLeft':
        focusOnAnotherInput(currentTarget, 'backward');
        return;
      case 'ArrowRight':
        focusOnAnotherInput(currentTarget, 'forward');
        return;
      default:
        return;
    }
  };

  return (
    <form className='rowInput'>
      <button type='reset'>Reset</button>
      {cells.map((cell) => (
        <input
          type='text'
          className={getClassName(cell.hasError)}
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
