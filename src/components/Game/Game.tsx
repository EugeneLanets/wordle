import './Game.css';

import { useEffect, useState } from 'react';

import wordService from '../../services/wordService';
import RowInput from '../RowInput';
import { useSelector } from 'react-redux';

const Game = () => {
  const { word } = useSelector((state: { word: string }) => state);
  console.log(word);
  // useEffect(() => {
  //   wordService
  //     .getRandomWord()
  //     .then((r) => setWord(r))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <section className='game'>
      {word}
      <RowInput />
    </section>
  );
};

export default Game;
