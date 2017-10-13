import React, { Component } from 'react';
import './App.css';
import AddItemForm from './components/AddItemForm';
import axios from 'axios';
import ItemsList from './components/ItemsList';
import Item from './components/Item';
import {Route, Redirect, Switch, Link} from 'react-router-dom';

class App extends Component {
constructor() {
  super()
  this.state = {
    apiData: [],
    apiDataLoaded: false,
    inputNameValue: '',
    inputCategoryValue: '',
    inputPriceValue: '',
    inputQuantityValue: '',
  }
this.handleInputNameChange = this.handleInputNameChange.bind(this);
this.handleInputCategoryChange = this.handleInputCategoryChange.bind(this);
this.handleInputPriceChange = this.handleInputPriceChange.bind(this);
this.handleInputQuantityChange = this.handleInputQuantityChange.bind(this);
this.newItemFromDB = this.newItemFromDB.bind(this);
}

componentDidMount() {
    fetch('/items')
      .then(res => res.json()).then((jsonRes) => {
      this.setState({
        apiData: jsonRes,
        apiDataLoaded: true,
      });
    });
  }

handleInputNameChange(event) {
    this.setState({
      inputNameValue: event.target.value
    });
  }

  handleInputCategoryChange(event) {
    this.setState({
      inputCategoryValue: event.target.value
    });
  }

  handleInputPriceChange(event) {
    this.setState({
      inputPriceValue: event.target.value
    });
  }

  handleInputQuantityChange(event) {
    this.setState({
      inputQuantityValue: event.target.value
    });
  }

  newItemFromDB(item){
    console.log(item)
  /* setting state as an array */
  this.setState((prevState) => {
    return {
      apiData: prevState.apiData.concat(item),
    }
  })
}

  render() {
    return (
      <div className="App">
        <main id="background">
          <Switch>
            <Route exact path="/" render={props => <ItemsList apiData={this.state.apiData} apiDataLoaded={this.state.apiDataLoaded} {...props} />} />
            <Route exact path="/item/:id" render={props => <Item apiData={this.state.apiData} apiDataLoaded={this.state.apiDataLoaded} {...props} />} />
            <Route exact path="/add" render={props => <AddItemForm {...props}
              handleInputNameChange={this.handleInputNameChange}
              handleInputCategoryChange={this.handleInputCategoryChange}
              handleInputPriceChange={this.handleInputPriceChange}
              handleInputQuantityChange={this.handleInputQuantityChange}
              inputNameValue={this.state.inputNameValue}
              inputCategoryValue={this.state.inputCategoryValue}
              inputPriceValue={this.state.inputPriceValue}
              inputQuantityValue={this.state.inputQuantityValue}
              newItemFromDB={this.newItemFromDB} />} />
          </Switch>
        </main>
      </div>
    );
  }

}

// 1
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       apiData: null, // where is this being updated?
//       apiDataLoaded: false,
//       inputNameValue: '',
//       inputCategoryValue: '',
//       inputPriceValue: '',
//       inputQuantityValue: '',
//     };
//     this.handleInputNameChange = this.handleInputNameChange.bind(this);
//     this.handleInputCategoryChange = this.handleInputCategoryChange.bind(this);
//     this.handleInputPriceChange = this.handleInputPriceChange.bind(this);
//     this.handleInputQuantityChange = this.handleInputQuantityChange.bind(this);
//     this.handleItemSubmit = this.handleItemSubmit.bind(this);
//   }

//   componentDidMount() {
//     fetch('/items')
//       .then(res => res.json()).then((jsonRes) => {
//       this.setState({
//         apiData: jsonRes,
//         apiDataLoaded: true,

//       });
//     });
//   }
// handleInputNameChange(event) {
//     this.setState({
//       inputNameValue: event.target.value
//     });
//   }

//   handleInputCategoryChange(event) {
//     this.setState({
//       inputCategoryValue: event.target.value
//     });
//   }

//   handleInputPriceChange(event) {
//     this.setState({
//       inputPriceValue: event.target.value
//     });
//   }

//   handleInputQuantityChange(event) {
//     this.setState({
//       inputQuantityValue: event.target.value
//     });
//   }

//   handleItemSubmit(event) {
//     event.preventDefault();
//     event.target.name = '';
//      console.log(this.state,'>-------->')
//      console.log(this.state)
//     axios.post('/items', {
//       name: this.state.inputNameValue,
//       category: this.state.inputCategoryValue,
//       price: this.state.inputPriceValue,
//       quantity: this.state.inputQuantityValue
//     })
//     .then(res => {
//       console.log(res.config.data,'is this the response');
//       if (res.data.item.id !== undefined) {
//         const newItem = {
//           name: res.data.item.name,
//           category: res.data.item.category,
//           price: res.data.item.price,
//           quantity: res.data.item.quantity

//         }
//         /* setting state as an array */
//         this.setState((prevState) => {
//           return {
//             items: prevState.items.concat(newItem),
//           }
//         })
//       }
//     }).catch(err => console.log(err));
//   }

//   render() {
//     //console.log('APP rendering', this.state.apiData);
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>Add Products</h2>
//         </div>
//         <AddItemForm
//           handleItemSubmit={this.handleItemSubmit}
//           handleInputNameChange={this.handleInputNameChange}
//           handleInputCategoryChange={this.handleInputCategoryChange}
//           handleInputPriceChange={this.handleInputPriceChange}
//           handleInputQuantityChange={this.handleInputQuantityChange}
//           inputNameValue={this.state.inputNameValue}
//           inputCategoryValue={this.state.inputCategoryValue}
//           inputPriceValue={this.state.inputPriceValue}
//           inputQuantityValue={this.state.inputQuantityValue}
//         />
//         <ItemsList
//           data={this.state.items}
//           />
//       </div>
//     );
//   }
// }

//1



////////
//   showItemsOnPage() {

//     return this.state.apiData.map((data) => {
//       return (
//         <div className="data" key={data.id}>
//           <p>{data.name}</p>
//           <span className="category">{data.category}</span>
//           <span className="price">{data.price}</span>
//           <span className="quantity">{data.quantity}</span>

//         </div>
//       );
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>
//           {(this.state.apiDataLoaded) ? this.showItemsOnPage() : <p>Loading...</p>}
//         </div>
//       </div>
//     );
//   }
// }

export default App;
