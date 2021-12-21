import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useMouse } from '../src/index';

const Demo = () => {
	const { pageX, pageY } = useMouse()

  return (
    <div>
      X: {pageX} Y: {pageY}
    </div>
  );
};

storiesOf('State/useMouse', module)
  .add('Demo', () => <Demo />);