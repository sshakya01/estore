import React, { Component } from "react";
import axios from 'axios';

class AddItemForm extends Component {
  constructor(props){
    super(props);

    this.handleItemSubmit = this.handleItemSubmit.bind(this);
  }

handleItemSubmit(event) {
    event.preventDefault();

    axios.post('/items', {
      name: this.props.inputNameValue,
      category: this.props.inputCategoryValue,
      price: this.props.inputPriceValue,
      quantity: this.props.inputQuantityValue
    })
    .then(res => {
      console.log(res);

      if (!res){
        const newItem = {
          name: res.data.item.name,
          category: res.data.item.category,
          price: res.data.item.price,
          quantity: res.data.item.quantity
        }
        this.props.newItemFromDB(newItem)
      }
      this.props.history.push('/')
    }).catch(err => console.log(err));

  }

  render() {
    return (
      <form
        className="add-item-form"
        onSubmit={this.handleItemSubmit}
      >
      <input
          type="text"
          value={this.props.inputNameValue}
          name="name"
          placeholder="Add Name"
          onChange={this.props.handleInputNameChange}
      /><br/>
        <input
          type="text"
          value={this.props.inputCategoryValue}
          name="Category"
          placeholder="Category"
          onChange={this.props.handleInputCategoryChange}
        /><br/>
        <input
          type="float"
          value={this.props.inputPriceValue}
          name="price"
          placeholder="Add Price Here"
          onChange={this.props.handleInputPriceChange}
        /><br/>
        <input
          type="integer"
          value={this.props.inputQuantityValue}
          name="price"
          placeholder="How many in stock"
          onChange={this.props.handleInputQuantityChange}
        /><br/>
        <button type="submit" id="submit">Add Item!</button>
      </form>
    );
  }
}

export default AddItemForm;
