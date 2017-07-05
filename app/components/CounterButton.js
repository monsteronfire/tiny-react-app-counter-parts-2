import React from 'react';

class CounterButton extends React.Component {
  render() {
    return (
      <button className='CounterButton' onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}

export default CounterButton;
