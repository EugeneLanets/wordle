import { type ICell, Status, type StatusCell } from '../types/rows';

const getStatus = (guess: ICell[], answer: string[]): StatusCell[] => {
  const result = guess.map((cell, idx) => {
    const status = cell.letter === answer[idx] ? Status.Correct : Status.Absent;
    return {
      ...cell,
      status,
    };
  });

  console.log(result);

  return result;
};

export default getStatus;
