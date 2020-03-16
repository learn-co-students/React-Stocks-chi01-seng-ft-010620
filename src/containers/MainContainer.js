import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      stockData: null,
      stocksInPortfolio: [],
      filteredData: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocksData => {
      this.setState({
        stockData: stocksData,
        filteredData: stocksData
      })
    })
  }

  addStockToPortfolio = (id) => {
    const newStock = this.state.stockData.find(stock => stock.id === id)
    this.setState({
      stocksInPortfolio: [
        ...this.state.stocksInPortfolio,
        newStock
      ]
    })
  }

  removeStockFromPortfolio = (id) => {
    const newPortfolio = this.state.stocksInPortfolio.filter(stock => {
      return stock.id !== id
    })
    this.setState({
      stocksInPortfolio: newPortfolio
    })
  }

  changeSortOrder = (event) => {
    const alphaBtn = document.getElementById('alphabetically')
    const priceBtn = document.getElementById('price')
    let newData
    if (event.target === alphaBtn) {
      priceBtn.checked = false
      newData = this.state.filteredData.sort((a,b) => {
        if (a.name < b.name) {return -1}
        if (a.name > b.name) {return 1}
      })
    } else if (event.target === priceBtn) {
      alphaBtn.checked = false
      newData = this.state.filteredData.sort((a,b) => {
        if (a.price < b.price) {return -1}
        if (a.price > b.price) {return 1}
      })
    }
    this.setState({
      filteredData: newData
    })
  }

  changeFilter = (event) => {
    let newData
    if (event.target.value === 'All') {
      newData = this.state.stockData
    } else {
      newData = this.state.stockData.filter(stock => {
        return stock.type === event.target.value
      })
    }
    this.setState({
      filteredData: newData
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchBar changeSortOrder={this.changeSortOrder} changeFilter={this.changeFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filteredData} handleClick={this.addStockToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.stocksInPortfolio} handleClick={this.removeStockFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
