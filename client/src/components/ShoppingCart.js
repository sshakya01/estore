import React, { Component } from 'react';

class ShoppingCart extends Component {

  constructor(props){
    super(props);

    console.log(this.props)
    console.log(this.props.shoppingCart)
  }
    renderShoppingCart(){
      let cart = this.props.shoppingCart.map((item, index) => {
        return (
          <div key={index}>
            {item.name}
          </div>
        );
      });

      return cart;
    }

  render() {
    return (
      <div className='itemHolder'>
      {this.renderShoppingCart()}
      </div>
    );
  };
}

export default ShoppingCart;
