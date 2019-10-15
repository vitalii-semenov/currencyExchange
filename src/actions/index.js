import {
  ADD_FAVOURITE_CURRENCY,
  CHANGE_CURRENT_CURRENCY,
  REMOVE_FAVOURITE_CURRENCY
} from './actionsTypes'

export const changeCurrentCurrency = (value) => {
  return {
    type: CHANGE_CURRENT_CURRENCY,
    payload: value,
  }
};

export const addFavouriteCurrency = (value) => {
  return {
    type: ADD_FAVOURITE_CURRENCY,
    payload: value
  }
};

export const removeFavouriteCurrency = (value) => {
  return {
    type: REMOVE_FAVOURITE_CURRENCY,
    payload: value
  }
};
