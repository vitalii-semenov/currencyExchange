import React from 'react';
import './CurrencyItem.scss'

const CurrencyItem = ({ value, rate, favourite, addFavouriteCurrency, removeFavouriteCurrency }) => {
  return (
    <div className="d-flex justify-content-between itemContainer">
      <div className="font-weight-bold itemMain">
        {value}:
      </div>
      <div className="itemContent">
        {rate}
      </div>
      {favourite ?
        <button className='currencyItemButton favButton' onClick={()=>{
        removeFavouriteCurrency(value)
        }}>-</button> :
        <button className='currencyItemButton' onClick={()=> {
          addFavouriteCurrency(value)
        }}>+</button>}
    </div>
  );
};

export default CurrencyItem;
