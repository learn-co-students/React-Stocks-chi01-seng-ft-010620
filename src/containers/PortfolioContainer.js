import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    if (this.props.stocks) {
      return this.props.stocks.map(stock => {
        return <Stock key={`p${stock.id}`} stock={stock} handleClick={this.props.handleClick} />
      })
    }
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
