import React, { Component } from 'react';

class SingleItem extends Component {
  render() {
    return (
      <div className='itemHolder'>
       <h1>Item Name: {this.props.item.name}</h1>
        <div className='price'>
       <h3>Price: ${this.props.item.price}</h3>
        </div>
        <div className='description'>
        <p>Description: {this.props.item.description}</p>
        </div>
     <button id="addtocart" onClick= {()=>this.props.handleaddtoCart(this.props.item)}>Add to Cart</button>
      </div>

    );
  };
}

export default SingleItem;

