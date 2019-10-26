import { createElement, useState } from 'react';
import Button from 'src/components/Button';

function Page1() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <div>Hello Page 1</div>
      <div>
        <div>
          <Button onClick={increment}>+</Button>
          <div>{count}</div>
          <Button onClick={decrement}>-</Button>
        </div>
      </div>
    </div>
  );
}

export default Page1;
