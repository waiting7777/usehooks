import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useCounter } from '../src/index';

const Demo = () => {
  const [initialValue, setInitialValue] = React.useState(5);
  const { count, increment, decrement, setCount, reset } = useCounter(initialValue);

  return (
    <div>
      <div>
        current: {count}
      </div>
      <br />
      Current value: <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => setCount(100)}>Set 100</button>
      <button onClick={() => reset()}>Reset</button>
      <br />
      <br />
      Initial value: {initialValue}
      <button onClick={() => setInitialValue((v) => ++v)}>Increment</button>
      <button onClick={() => setInitialValue((v) => --v)}>Decrement</button>
    </div>
  );
};

storiesOf('State/useCounter', module)
  .add('Demo', () => <Demo />);