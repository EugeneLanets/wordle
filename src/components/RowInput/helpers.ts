import classNames from 'classnames';

export const focusOnNextInput = (element: HTMLInputElement) => {
  (element.nextElementSibling as HTMLInputElement)?.focus();
};
export const focusOnPreviousInput = (element: HTMLInputElement) => {
  (element.previousElementSibling as HTMLInputElement)?.focus();
};

export const isInputValid = (inputValue: string): boolean =>
  /[ёа-я]/.test(inputValue.toLowerCase());

export const getClassName = (id: string, errorId: string) => {
  return classNames('cell', { cell__type_error: id === errorId });
};
