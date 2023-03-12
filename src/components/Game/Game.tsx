import './Game.css';

import RowInput from '../RowInput';
import { useSelector } from 'react-redux';

const Game = () => {
  const { word } = useSelector((state: { word: string }) => state);

  return (
    <section className='game'>
      {word}
      <RowInput />
    </section>
  );
};

export default Game;
