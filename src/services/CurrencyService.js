// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class CurrencyService extends Component {
  #apiUrl = 'https://api.ratesapi.io/api/latest?base=';
  getAllCurrencies = async (url) => {
    const res = await fetch(`${this.#apiUrl}${url.toUpperCase()}`);
    if (!res.ok) throw new Error(`Could not fetch data from ${this.#apiUrl}${url}`);
    return await res.json();
  };

  getCoefficient = async (value1, value2) => {
    const res = await fetch(`${this.#apiUrl}${value1.toUpperCase()}&symbols=${value2.toUpperCase()}`);
    if (!res.ok) throw new Error(`Could not fetch data from ${this.#apiUrl}${value1}&symbols=${value2}`);
    return await res.json();
  }
};

export const currencyService = new CurrencyService();
