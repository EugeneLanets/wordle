import { type FC, type PropsWithChildren } from 'react';
import classnames from '../../utils/classnames';
import './style.css';

const RowLayout: FC<PropsWithChildren> = ({ children }) => {
  const cn = classnames('RowLayout');
  return <div className={cn()}>{children}</div>;
};

export default RowLayout;
