import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className='itemHolder'>
      <h2>{this.props.item.name} </h2>
       <div className='price'>
       <h3>${this.props.item.price}</h3>
       </div>
      </div>
    );
  };
}

export default Item;
