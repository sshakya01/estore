import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="logo">Store Display</h1>
        <Nav />
      </header>
    );
  };
}

export default Header;
