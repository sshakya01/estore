import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className='itemHolder'>
        {this.props.item.name}
      </div>
    );
  };
}

export default Item;
