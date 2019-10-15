// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import './CurrencyExchange.scss'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

const CurrencyExchange = (props: Object) => {
  const {
    defaultPlaceholderFrom,
    defaultPlaceholderTo,
    currenciesList,
    valueFrom,
    valueTo,
    history,
    setDefaultPlaceholderFrom,
    setDefaultPlaceholderTo,
    setDefaultValueFrom,
    setDefaultValueTo,
  } = props;
  let dropdownCurrencies = currenciesList.map(el => {
    return {
      name: el,
      code: el.toLowerCase()
    }
  });
  return (
    <div className="container">
      <div className="row justify-content-md-center align-items-center headerMenu mb-3">
        <div className="col-4">
          <div className="btn-group">
            <button type="button"
                    onClick={() => history.push('/')}
                    className="btn btn-secondary active">
              Currency Exchange
            </button>
            <button type="button"
                    onClick={() => history.push('/list')}
                    className="btn btn-secondary">
              Currency List
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center mainContent">
        <div className="row">
          <div className="col">
            <div className="dropdownContainer mb-1">
              <div className="row">
                <div className="col-12">Your Base Currency:</div>
              </div>
              <Dropdown
                name="currency"
                value={(e) => e.value.code}
                onChange={(e) => setDefaultPlaceholderFrom(e.value.code)}
                options={dropdownCurrencies}
                placeholder={defaultPlaceholderFrom.toUpperCase()}
                optionLabel="name"/>
            </div>
            <div className="inputContainer">
              <InputText
                value={valueFrom}
                onChange={(e) => setDefaultValueFrom(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="dropdownContainer mb-1 mt-4">
              <Dropdown
                name="currency"
                value={(e) => e.value.code}
                options={dropdownCurrencies}
                onChange={(e) => setDefaultPlaceholderTo(e.value.code)}
                placeholder={defaultPlaceholderTo.toUpperCase()}
                optionLabel="name"/>
            </div>
            <div className="inputContainer">
              <InputText
                value={valueTo}
                onChange={(e) => setDefaultValueTo(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default withRouter(CurrencyExchange);
