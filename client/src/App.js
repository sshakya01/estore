import React, { Component } from 'react';
import './App.css';
import AddItemForm from './components/AddItemForm';
import axios from 'axios';
import ItemsList from './components/ItemsList';
import Item from './components/Item';
import SingleItem from './components/SingleItem';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart'
import Home from './components/Home';
import {Route, Redirect, Switch, Link, withRouter} from 'react-router-dom';

class App extends Component {
constructor() {
  super()
  this.state = {
    apiData: [],
    shoppingCart: [],
    apiDataLoaded: false,
    inputNameValue: '',
    inputCategoryValue: '',
    inputPriceValue: '',
    inputQuantityValue: '',
    singleItem: ''
  }
this.handleInputNameChange = this.handleInputNameChange.bind(this);
this.handleInputCategoryChange = this.handleInputCategoryChange.bind(this);
this.handleInputPriceChange = this.handleInputPriceChange.bind(this);
this.handleInputQuantityChange = this.handleInputQuantityChange.bind(this);
this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
this.newItemFromDB = this.newItemFromDB.bind(this);
this.singleItemView = this.singleItemView.bind(this);
this.handleaddtoCart = this.handleaddtoCart.bind(this);
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
  handleDescriptionChange(event) {
    this.setState({
      inputDescriptionValue: event.target.value
    });
  }

  singleItemView(id){
    console.log('inside singleItemView in app', id)
    console.log(this.state.apiData)
    const singleItem = this.state.apiData.filter(d => {
      if(d.id == id) return d
    })[0]
    this.setState({
      singleItem: singleItem
    })
    this.props.history.push("/item/" + id)
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

handleaddtoCart(item){
  console.log(item)
  this.setState((prevState) => {
    return {shoppingCart: prevState.shoppingCart.concat(item)};
  });
}

  render() {
    return (
      <div className="App">
        <main id="background">
        <Header />
          <Switch>
            <Route exact path="/" component= {Home}/>
            <Route exact path="/item" render={props => <ItemsList handleSingleView={this.singleItemView} apiData={this.state.apiData} apiDataLoaded={this.state.apiDataLoaded} {...props} />} />
            <Route exact path="/item/:id"  render={props => <SingleItem handleaddtoCart={this.handleaddtoCart} item={this.state.singleItem}/>} />}
            <Route exact path="/cart"  component={props => <ShoppingCart shoppingCart={this.state.shoppingCart} {...props} />}/>
            <Route exact path="/add" render={props => <AddItemForm {...props}
              handleInputNameChange={this.handleInputNameChange}
              handleInputCategoryChange={this.handleInputCategoryChange}
              handleInputPriceChange={this.handleInputPriceChange}
              handleInputQuantityChange={this.handleInputQuantityChange}
              handleDescriptionChange={this.handleDescriptionChange}
              inputNameValue={this.state.inputNameValue}
              inputCategoryValue={this.state.inputCategoryValue}
              inputPriceValue={this.state.inputPriceValue}
              inputQuantityValue={this.state.inputQuantityValue}
              inputDescriptionValue={this.state.inputDescriptionValue}
              newItemFromDB={this.newItemFromDB} />} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }

}


export default withRouter(App);
