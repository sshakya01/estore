import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className='itemHolder'>
       {this.props.item.name}
       <div className='price'>
       {this.props.item.price}
       </div>
       {this.props.item.description}
      </div>
    );
  };
}

export default Item;
