import React from 'react';

class CounterInput extends React.Component {
  render() {
    return (
      <input className='counter-input' value={this.props.value} onChange={this.props.onChange} />
    )
  }
}

export default CounterInput;
