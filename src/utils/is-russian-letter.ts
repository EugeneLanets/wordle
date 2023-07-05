const isRussianLetter = (letter: string): boolean => /[а-я]/.test(letter);

export default isRussianLetter;
