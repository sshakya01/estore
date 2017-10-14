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
      quantity: this.props.inputQuantityValue,
      description: this.props.inputDescriptionValue
    })
    .then(res => {
      window.location.reload();

      if (!res){
        const newItem = {
          name: res.data.item.name,
          category: res.data.item.category,
          price: res.data.item.price,
          quantity: res.data.item.quantity,
          description: res.data.item.description
        }
        this.props.newItemFromDB(newItem)
      }
      this.props.history.push('/item')
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
        <input
          type="text"
          value={this.props.inputDescriptionValue}
          name="description"
          placeholder="Description"
          onChange={this.props.handleDescriptionChange}
        /><br/>
        <button type="submit" id="submit">Add Item!</button>
      </form>
    );
  }
}

export default AddItemForm;
