import React, { useState } from 'react';
import Icon from 'src/components/Icon';
import Button from 'src/components/Button';
import arrow from 'src/icons/arrow.svg';

const Page1: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);

  return (
    <div>
      <div>Hello Page 1</div>
      <div>
        <Icon href={arrow} />
        <div>
          <Button onClick={increment}>+</Button>
          <div>{count}</div>
          <Button onClick={decrement}>-</Button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
