import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    if (this.props.stocks) {
      return this.props.stocks.map(stock => {
        return <Stock key={`s${stock.id}`} handleClick={this.props.handleClick} stock={stock} />
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
