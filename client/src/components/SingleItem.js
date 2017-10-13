import React, { Component } from 'react';

class SingleItem extends Component {
  render() {
    return (
      <div className='itemHolder'>
        {this.props.item.name}
      </div>
    );
  };
}

export default SingleItem;

