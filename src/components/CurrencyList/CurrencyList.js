// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import CurrencyItem from '../CurrencyItem/CurrencyItem';

type Props = {
  history?: History,
  currenciesWithRate?: Object,
  favouriteCurrencies?: Object,
  addFavouriteCurrency?: Function,
  removeFavouriteCurrency?: Function,
};

const CurrencyList: Props = (props) => {
    const { history,
      currenciesWithRate,
      favouriteCurrencies,
      addFavouriteCurrency,
      removeFavouriteCurrency} = props;
    return (
      <div className="container">
        <div className="row justify-content-md-center align-items-center headerMenu mb-3">
          <div className="col-4">
            <div className="btn-group">
              <button type="button"
                      onClick={() => history.push('/')}
                      className="btn btn-secondary">
                Currency Exchange
              </button>
              <button type="button"
                      onClick={() => history.push('/list')}
                      className="btn btn-secondary active">
                Currency List
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mainContent">
          {currenciesWithRate.filter(el => favouriteCurrencies.indexOf(el.value) !== -1).map((el, index) => {
            return <CurrencyItem
              key={index}
              value={el.value}
              rate={el.rate}
              favourite={true}
              removeFavouriteCurrency={removeFavouriteCurrency}/>
          })}
          {currenciesWithRate.filter(el => favouriteCurrencies.indexOf(el.value) === -1).map((el, index) => {
            return <CurrencyItem
              key={index}
              value={el.value}
              rate={el.rate}
              favourite={false}
              addFavouriteCurrency={addFavouriteCurrency}/>
          })}
        </div>
      </div>
    )
}

export default withRouter(CurrencyList);
