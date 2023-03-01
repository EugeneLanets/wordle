import './StartScreen.css';
import { Link } from 'react-router-dom';

const StartScreen = () => (
  <div className='startScreen'>
    <Link to='game' className='startScreen__link'>
      Начать игру
    </Link>
    <Link to='rules' className='startScreen__link'>
      Правила игры
    </Link>
  </div>
);

export default StartScreen;
