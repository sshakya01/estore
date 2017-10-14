import React, { Component } from 'react';

class SingleItem extends Component {
  render() {
    return (
      <div className='itemHolder'>
      <button onClick= {()=>this.props.handleaddtoCart(this.props.item)}>Add to Cart</button>
        {this.props.item.name}
        <div className='price'>
        {this.props.item.price}
        </div>
        {this.props.item.description}
      </div>
    );
  };
}

export default SingleItem;

