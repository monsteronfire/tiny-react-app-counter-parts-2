import React from 'react';

class CountDisplay extends React.Component {
  render() {
    return (
      <h1 className='count'>{this.props.count}</h1>
    )
  }
}

export default CountDisplay;
