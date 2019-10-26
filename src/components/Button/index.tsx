import React from 'react';
import * as style from './style.scss';

interface Props {
  children: string;
  onClick: () => void;
}

function Button(props: Props) {
  const { children, onClick } = props;

  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
