import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <div className="Nav">
        <ul>
          <li>Home</li>
          <a href='/item'><li>Product</li></a>
          <li>Login</li>
          <li>Register</li>
          <a href='/add'><li>add</li></a>
          <link href='/add' name= 'press'/>
          </ul>
      </div>
          );
  }
}

export default Nav;
