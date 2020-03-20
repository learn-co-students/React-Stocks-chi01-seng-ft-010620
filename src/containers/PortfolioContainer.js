import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div onClick={(event)=>{console.log("event",event)}}>
        <h2>My Portfolio</h2>
          {
            this.props.myPorfolio.map(myStock=>{
              return <Stock stocks={myStock}/>
            })
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
