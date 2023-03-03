import './TextScreen.css';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';

interface ITextScreenProps {
  title: string;
}

const TextScreen = ({
  title,
  children,
}: PropsWithChildren<ITextScreenProps>) => {
  const navigate = useNavigate();
  return (
    <div className='textScreen'>
      <h2 className='textScreen__title'>{title}</h2>
      {children}
      <button
        type='button'
        className='textScreen__close-button'
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </button>
    </div>
  );
};

export default TextScreen;
