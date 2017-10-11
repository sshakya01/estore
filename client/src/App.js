import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount() {
    fetch('/items').then(res => res.json()).then((jsonRes) => {
      this.setState({
        apiData: jsonRes,
        apiDataLoaded: true,

      });
    });
  }

  showItemsOnPage() {

    return this.state.apiData.map((data) => {
      return (
        <div className="itemdata" key={data.id}>
          <p>{data.name}</p>
          <span className="price">{data.price}</span>
          <span className="category">{data.category}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {(this.state.apiDataLoaded) ? this.showItemsOnPage() : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

export default App;
