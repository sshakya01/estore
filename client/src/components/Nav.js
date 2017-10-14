import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <div className="Nav">
        <ul>
          <a href='/'><li>Home</li></a>
          <a href='/item'><li>Product</li></a>
          <a href='/cart'><li>My Shopping Cart</li></a>
          <li>Login</li>
          <li>Register</li>
          <a href='/add'><li>add</li></a>
          </ul>
      </div>
          );
  }
}

export default Nav;
