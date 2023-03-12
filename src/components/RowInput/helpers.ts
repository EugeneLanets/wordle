import classNames from 'classnames';

export const focusOnAnotherInput = (
  element: HTMLInputElement,
  direction: string
) => {
  const directions = {
    forward: 'nextElementSibling',
    backward: 'previousElementSibling',
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const nextElement = element[directions[direction]];
  if (!nextElement) return;
  if (nextElement.tagName === 'INPUT') {
    nextElement.focus();
  }
};

export const isInputValid = (inputValue: string): boolean =>
  /^[ёа-я]$/i.test(inputValue.toLowerCase());

export const getClassName = (hasError: boolean) => {
  return classNames('cell', { cell_type_error: hasError });
};
