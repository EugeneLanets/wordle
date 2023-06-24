const getNextInputOrButton = (
  element: HTMLInputElement
): HTMLInputElement | HTMLButtonElement | null => {
  const nextElement = element.nextElementSibling;
  if (nextElement === null) return null;
  switch (nextElement.tagName) {
    case 'INPUT':
      return nextElement as HTMLInputElement;
    case 'BUTTON':
      return nextElement as HTMLButtonElement;
    default:
      return null;
  }
};

const goToNextElement = (element: HTMLInputElement): void => {
  const nextElement = getNextInputOrButton(element);
  if (nextElement === null) return;
  nextElement.focus();
};

export default goToNextElement;
