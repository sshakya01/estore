import React, { Component } from 'react';
import Item from './Item';
//import Input from './partials/Input';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ItemsList extends Component {
  constructor(){
    super()
    this.handleViewItem = this.handleViewItem.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  handleItemDelete(id){
    fetch(`/items/${id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.status === 200) {
        fetch('/items')
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

handleViewItem(id){
  this.props.handleSingleView(id)
}

renderItemsList() {
    console.log(this.props.apiDataLoaded, this.props.apiData);
    // <Item handleItemDelete={this.handleItemDelete} item={item} key={item.id} itemId={item.id} />
    if (this.props.apiDataLoaded) {
      return this.props.apiData.map((item) => {
        return (
        <div className="item">
          <h3><Item item={item} key={item.id} /></h3>
          <button className="itemButton" onClick={()=>{this.handleItemDelete(item.id)}} id="itemDelete">{'\uD83D\uDDD1'}</button>
          <button className="viewItem" onClick={() => {this.handleViewItem(item.id)}}>View</button>
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

