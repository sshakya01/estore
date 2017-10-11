import React, { Component } from "react";

class AddItemForm extends Component {
  render() {
    return (
      <form
        className="add-item-form"
        onSubmit={this.props.handleItemSubmit}
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
        <button id="submit">Add Item!</button>
      </form>
    );
  }
}

export default AddItemForm;
