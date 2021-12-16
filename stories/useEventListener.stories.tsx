import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useEventListener } from '../src/index';

const Demo = () => {
	const buttonRef = React.useRef<HTMLButtonElement>(null)

	const onClick = (event: Event) => {
		console.log('button clicked!', event)
	}

	useEventListener('click', onClick, buttonRef)

  return (
    <div>
      <button ref={buttonRef}>
				Click
      </button>
    </div>
  );
};

storiesOf('State/useEventListener', module)
  .add('Demo', () => <Demo />);