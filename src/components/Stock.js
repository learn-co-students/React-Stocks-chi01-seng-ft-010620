import React from 'react';

const Stock = props => {
   const { stocks,purchaseStock } = props;
  
  return (
    <div className="card" key={props.stocks.id} onClick={()=>{purchaseStock(stocks)}}>
      <div className="card-body" >
        <h5 className="card-title">
          {stocks.name}
        </h5>
        <p className="card-text">
          { stocks.ticker
          
          }: {stocks.price}
        </p>
      </div>
    </div>
  );
};
export default Stock;
