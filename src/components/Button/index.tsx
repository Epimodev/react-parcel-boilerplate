import React from 'react';
import * as style from './style.scss';

interface Props {
  children: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
