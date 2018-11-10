import { createElement } from 'react';
import Icon from 'src/components/Icon';
import Button from 'src/components/Button';
import arrow from 'src/icons/arrow.svg';

function Page1() {
  return (
    <div>
      <div>Hello Page 1</div>
      <div>
        <Icon href={arrow} />
        <Button onClick={() => console.log('Hey!!')}>Click Me !</Button>
      </div>
    </div>
  );
}

export default Page1;
