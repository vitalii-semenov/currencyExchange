import React, { Component } from 'react';
import CurrencyList from '../../components/CurrencyList/CurrencyList';
import { currencyService } from '../../services/CurrencyService';
import {
  addFavouriteCurrency,
  changeCurrentCurrency,
  removeFavouriteCurrency
} from '../../actions';
import { connect } from 'react-redux';
import { getCurrentCurrency, getFavouriteCurrency } from '../../reducers/selectors';

class CurrencyListPage extends Component {
  state = {
    currenciesWithRate: []

  };

  componentDidMount(): void {
    const { currentCurrency } = this.props;
    currencyService.getAllCurrencies(currentCurrency)
    .then(res => {
      let parse = this.parseToArray(res.rates)
      this.setState({
        currenciesWithRate: parse
      });
    })
  }

  parseToArray = (obj) => {
    let rates = Object.keys(obj).map(el => {
      return { value: el, rate: obj[el] }
    });
    return rates;
  };

  render() {
    const { currenciesWithRate } = this.state;
    const {
      favouriteCurrencies,
      addFavouriteCurrency,
      removeFavouriteCurrency
    } = this.props;
    return (
      <CurrencyList
        currenciesWithRate={currenciesWithRate}
        favouriteCurrencies={favouriteCurrencies}
        addFavouriteCurrency={addFavouriteCurrency}
        removeFavouriteCurrency={removeFavouriteCurrency}
      />
    )
  }
}

const mapStateToProps = (state) => ({
    currentCurrency: getCurrentCurrency(state),
    favouriteCurrencies: getFavouriteCurrency(state),
});

const mapDispatchToProps = {
  changeCurrentCurrency,
  addFavouriteCurrency,
  removeFavouriteCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListPage);
