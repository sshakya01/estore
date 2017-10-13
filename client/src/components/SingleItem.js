import React, { Component } from 'react';

class SingleItem extends Component {
  render() {
    return (
      <div className='itemHolder'>
        {this.props.item.name}
        <div className='price'>
        {this.props.item.price}
        </div>
      </div>
    );
  };
}

export default SingleItem;

