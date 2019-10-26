import { createElement } from 'react';
import style from './style.scss';

interface Props {
  children: string;
  onClick: () => void;
}

console.log('STYLE', style);

function Button(props: Props) {
  const { children, onClick } = props;

  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
