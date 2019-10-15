import React, { Component } from 'react';
import { connect } from 'react-redux'
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { currencyService } from '../../services/CurrencyService';
import { changeCurrentCurrency } from '../../actions';

class CurrencyExchangePage extends Component {
  state = {
    defaultPlaceholderFrom: '',
    defaultPlaceholderTo: 'eur',
    valueFrom: null,
    valueTo: null,
    currenciesList: [],
    currenciesWithRate: {},
    currentRate: 0,
  };

  componentDidMount(): void {
    const {currentCurrency} = this.props.currency;
    this.setState({defaultPlaceholderFrom: currentCurrency}, this.getCoef)
    currencyService.getAllCurrencies(currentCurrency)
    .then(res => {
      let currencies = Object.keys(res.rates);
      this.setState({
        currenciesList: currencies,
        currenciesWithRate: res
      });
    })
  }

  setDefaultPlaceholderFrom = (value) => {
    const {changeCurrentCurrency} = this.props;
    changeCurrentCurrency(value);
    this.setState({defaultPlaceholderFrom: value}, () => this.getCoef(this.setValueTo))
  };

  setDefaultPlaceholderTo = (value) => {
    this.setState({defaultPlaceholderTo: value}, () => this.getCoef(this.setValueFrom))
  };

  setDefaultValueFrom = (value) => {
    this.setState({valueFrom: value}, this.setValueTo)
  };

  setDefaultValueTo = (value) => {
    this.setState({valueTo: value}, this.setValueFrom)
  }

  getCoef = (cb) => {
    const {defaultPlaceholderFrom, defaultPlaceholderTo} = this.state;
    currencyService.getCoefficient(defaultPlaceholderFrom, defaultPlaceholderTo)
    .then(res => this.setState({
      currentRate: res.rates[defaultPlaceholderTo.toUpperCase()]
    }, () => cb ? cb() : {}))
  };

  setValueTo = () => {
    const { valueFrom, currentRate } = this.state;
    let resValue = valueFrom * currentRate
    this.setState({ valueTo: resValue })
  };

  setValueFrom = () => {
    const { valueTo, currentRate } = this.state;
    let resValue = valueTo / currentRate;
    this.setState({ valueFrom: resValue })
  };

  render() {
    const {
      defaultPlaceholderFrom,
      defaultPlaceholderTo,
      valueFrom,
      valueTo,
      currenciesList,
      currenciesWithRate,
      currentRate} = this.state;
    return (
      <CurrencyExchange
        defaultPlaceholderFrom={defaultPlaceholderFrom}
        defaultPlaceholderTo={defaultPlaceholderTo}
        valueFrom={valueFrom}
        valueTo={valueTo}
        currenciesList={currenciesList}
        currenciesWithRate={currenciesWithRate}
        currentRate={currentRate}
        setValueTo={this.setValueTo}
        setValueFrom={this.setValueFrom}
        getCoef={this.getCoef}
        setDefaultPlaceholderFrom={this.setDefaultPlaceholderFrom}
        setDefaultPlaceholderTo={this.setDefaultPlaceholderTo}
        setDefaultValueFrom={this.setDefaultValueFrom}
        setDefaultValueTo={this.setDefaultValueTo}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency.toJS()
});

const mapDispatchToProps = {
  changeCurrentCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyExchangePage);
