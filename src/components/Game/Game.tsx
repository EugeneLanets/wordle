import './Game.css';

import { useState } from 'react';

import { useEffect, useState } from 'react';

import wordService from '../../services/wordService';
import RowInput from '../RowInput';

const Game = () => {
  const [word, setWord] = useState('слово');
  // useEffect(() => {
  //   wordService
  //     .getRandomWord()
  //     .then((r) => setWord(r))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <section className='game'>
      <RowInput />
    </section>
  );
};

export default Game;
