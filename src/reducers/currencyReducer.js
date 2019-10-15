import { fromJS } from 'immutable';
import {
  ADD_FAVOURITE_CURRENCY,
  CHANGE_CURRENT_CURRENCY,
  REMOVE_FAVOURITE_CURRENCY
} from '../actions/actionsTypes'

const initialState = fromJS({
  currentCurrency: 'usd',
  favouriteCurrencies: []
});

const addCurrencyToFavourite = (state, value) => {
  let parse = state.get('favouriteCurrencies').toJS();
  parse.push(value);
  return state.set('favouriteCurrencies', fromJS(parse));
};

const removeCurrencyFromFavourite = (state, value) => {
  let parse = state.get('favouriteCurrencies').toJS();
  let parseFiltered = parse.filter(el => el !== value);
  return state.set('favouriteCurrencies', fromJS(parseFiltered));
}

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_CURRENCY:
      return state.set('currentCurrency', action.payload);
    case ADD_FAVOURITE_CURRENCY:
      return addCurrencyToFavourite(state, action.payload)
    case REMOVE_FAVOURITE_CURRENCY:
      return removeCurrencyFromFavourite(state, action.payload)
    default:
      return initialState;
  }
};

export default currencyReducer;
