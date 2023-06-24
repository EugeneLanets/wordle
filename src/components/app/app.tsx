import { type FC } from 'react';
import classnames from '../../utils/classnames';
import './style.css';
import Game from '../game';

const App: FC = () => {
  const cn = classnames('App');
  return (
    <div className={cn()}>
      <header className={cn('header')}>header</header>
      <main>
        <Game />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
