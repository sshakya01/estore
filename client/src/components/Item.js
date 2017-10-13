import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.itemId,
      inputNameValue: '',
      inputCategoryValue: '',
      inputPriceValue: '',
      inputQuantityValue: '',
    }
}



  renderItem() {
    //console.log(this.props.apiData[this.props.match.params.id])
    if(this.props.apiDataLoaded){
      //let item = this.props.apiData.filter(item => item.id === this.props.match.params.id);
      let item = this.props.apiData.filter(item => item.id);
      console.log(item)
      console.log(this.props.match.params.id)
      console.log(this.props)
    return (
      <div>
        <h3>Item Name:{item["0"].name}</h3>
        <h3>Price:{"$" + item["0"].price}</h3>
        <p>Quantity:{item["0"].quantity}</p>
      </div>
      )
  } else {
    return (<div>Loading...</div>);
  }
    // console.log(this.state)
    // if (this.state.apiDataLoaded) {
    //   return (
    //       <form onSubmit={this.handleItemSubmit} className="items">
    //         <div className='item'>{this.state.item}</div>
    //
    //       </form>
    //   );
    // }
  }


  render() {
    return (
      <div className='itemHolder'>
        {this.renderItem()}
      </div>
    );
  };
}

export default Item;
