import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';
//things to fix
//1) when clicking the stock cards in my porfolio, (i iknow its speeled wrong) it breaks,
//2) the rendering on filtering is not properly working
//3) the filtering button could be imporved
class MainContainer extends Component {
  state = {
    stocks: [],
    myPorfolio: [],
    sortOn: true,
    originalStocks: []
  };
  componentDidMount() {
    fetch(`http://localhost:3000/stocks`)
      .then(resp => resp.json())
      .then(data => {
        //console.log("data",data)
        this.setState({
          stocks: data,
          originalStocks:data
        });
      });
  }
  purchaseStock = stock => {
    console.log('------yikes-----', stock);
    if (this.state.myPorfolio.includes(stock)) {
      let myNewPorfolio = this.state.myPorfolio.filter(myPort => {
        return myPort !== stock;
      });
      //debugger
      this.setState({
        myPorfolio: myNewPorfolio
      });
    }
    if (!this.state.myPorfolio.includes(stock)) {
      this.setState(previousState => {
        return { myPorfolio: previousState.myPorfolio.concat(stock) };
      });
    }
  };
  handleFilter = event => {
   
    this.setState({
      stocks: this.state.originalStocks
    })
    let filterType= event.target.value
    
    if(filterType !== "None"){
      let filtered = this.state.stocks.filter(stock=>{
        return stock.type === filterType
      })
      this.setState({
        stocks: filtered
      })
   
    console.log("yupyuppt",this.state.stocks)
  }else{
    this.setState({
      stocks: this.state.originalStocks
    })
  }
}
  handleSort = event => {
    
    this.setState(previousState=>{
      return { sortOn: !previousState.sortOn}
    })
    console.log(this.state.sortOn)
    let sorted = ""
    if (event.target.value === 'Alphabetically') {
      sorted = this.state.stocks.sort((a, b) => {
        return a.ticker.localeCompare(b.ticker);
      });
      this.setState({
        stocks: sorted
      });
    } else {
      sorted = this.state.stocks.sort((a, b) => {
        return a.price - b.price;
      });
      this.setState({
        stocks: sorted
      });
    }
  };
  render() {
    
    return (
      <div>
        <SearchBar
          handleFiltering={this.handleFilter}
          handleSorting={this.handleSort}
          sortOn={this.state.sortOn}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks}
              purchaseStock={this.purchaseStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer myPorfolio={this.state.myPorfolio} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
