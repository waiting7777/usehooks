import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useWindowSize } from '../src/index';

const Demo = () => {
	const { width, height } = useWindowSize()

  return (
    <div>
      Width: {width} Height: {height}
    </div>
  );
};

storiesOf('State/useWindowSize', module)
  .add('Demo', () => <Demo />);