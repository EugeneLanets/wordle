import { type ICell, Status, type StatusCell } from '../types/rows';

const getStatus = (guess: ICell[], answer: string): StatusCell[] => {
  const answerSet = new Set(answer);
  const presents: Record<string, number> = {};
  const result = guess.map((cell, idx) => {
    let status: Status;
    if (answerSet.has(cell.letter)) {
      presents[cell.letter] ??= idx;
      status = Status.Present;
    }

    if (cell.letter === answer[idx]) {
      status = Status.Correct;
      presents[cell.letter] = idx;
    }

    status ??= Status.Absent;

    return {
      ...cell,
      status,
    };
  });

  return result.map((cell, idx) => {
    if (cell.status !== Status.Present) return cell;
    return {
      ...cell,
      status: presents[cell.letter] === idx ? Status.Present : Status.Absent,
    };
  });
};

export default getStatus;
