import React, { Component } from 'react';
import Item from './Item';
//import Input from './partials/Input';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ItemsList extends Component {
  constructor() {
    super();
    // state
    this.state = {
      // apiData: null, // where is this being updated?
      // apiDataLoaded: false,
      inputNameValue: '',
      inputCategoryValue: '',
      inputPriceValue: '',
      inputQuantityValue: '',
    };
    this.handleInputNameChange = this.handleInputNameChange.bind(this);
    this.handleInputCategoryChange = this.handleInputCategoryChange.bind(this);
    this.handleInputPriceChange = this.handleInputPriceChange.bind(this);
    this.handleInputQuantityChange = this.handleInputQuantityChange.bind(this);
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
  }

  //  componentDidMount() {
  //   fetch('/items')
  //     .then(res => res.json()).then((jsonRes) => {
  //     this.setState({
  //       apiData: jsonRes,
  //       apiDataLoaded: true,

  //     });
  //   });
  // }

  handleItemSubmit(event) {
    event.preventDefault();
    event.target.name = '';
     console.log(this.state,'>-------->')
     console.log(this.state)
    axios.post('/items', {
      name: this.state.inputNameValue,
      category: this.state.inputCategoryValue,
      price: this.state.inputPriceValue,
      quantity: this.state.inputQuantityValue
    })
    .then(res => {
      console.log(res.config.data,'is this the response');
      if (res.data.item.id !== undefined) {
        const newItem = {
          name: res.data.item.name,
          category: res.data.item.category,
          price: res.data.item.price,
          quantity: res.data.item.quantity

        }
        /* setting state as an array */
        this.setState((prevState) => {
          return {
            items: prevState.items.concat(newItem),
          }
        })
      }
    }).catch(err => console.log(err));
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

  handleItemDelete(id){
    fetch(`/item/${id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.status === 200) {
        fetch('/item')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState((prevState) => { return {
          apiData: jsonRes,
        }
      });
    });
  }
});
}

  renderItemsList() {
    console.log(this.props.apiDataLoaded, this.props.apiData);
    // <Item handleItemDelete={this.handleItemDelete} item={item} key={item.id} itemId={item.id} />
    if (this.props.apiDataLoaded) {
      return this.props.apiData.map((item) => {
        return (
        <div>
          <h3><Link to={'/item/'+item.id}>{item.name}</Link></h3>
          <button className="itemButton" onClick={()=>{this.handleItemDelete(item.id)}} id="itemDelete">{'\uD83D\uDDD1'}</button>
        </div>
        );
      });
    }// } else return <Loading />
  }

  render() {
    return (
        <div id="background">

          <div className="itemlist">
            {this.renderItemsList()}
          </div>
        </div>
    );
  };
}

export default ItemsList;
