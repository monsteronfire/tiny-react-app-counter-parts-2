import React from 'react';
import CounterButton from './CounterButton';
import CounterInput from './CounterInput';

class Counter extends React.Component {
  render() {
    return (
      <div className='counter'>
        <CounterButton/>
        <CounterButton/>
        <CounterInput/>
      </div>
    )
  }
}

export default Counter;
