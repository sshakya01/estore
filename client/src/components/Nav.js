import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
      <div className="Nav">
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/item'><li>Product</li></Link>
          <Link to='/cart'><li>My Shopping Cart</li></Link>
          <Link to='/add'><li>add</li></Link>
          </ul>
      </div>
          );
  }
}

export default Nav;
