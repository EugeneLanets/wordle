import classNames from 'classnames';

export const focusOnNextInput = (element: HTMLInputElement) => {
  (element.nextElementSibling as HTMLInputElement)?.focus();
};
export const focusOnPreviousInput = (element: HTMLInputElement) => {
  (element.previousElementSibling as HTMLInputElement)?.focus();
};

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
  /[ёа-я]/.test(inputValue.toLowerCase());

export const getClassName = (hasError: boolean) => {
  return classNames('cell', { cell__type_error: hasError });
};
