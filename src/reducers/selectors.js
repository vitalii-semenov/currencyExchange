// import {createSelector} from 'reselect';
import {createGetSelector} from 'reselect-immutable-helpers';

export const selectCurrency = (state) => state.currency;

export const  getCurrentCurrency = createGetSelector(selectCurrency, 'currentCurrency', 'usd');

export const  getFavouriteCurrency = createGetSelector(selectCurrency, 'favouriteCurrencies', []);
