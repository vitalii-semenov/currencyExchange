import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router';
import currencyReducer from './currencyReducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    currency: currencyReducer,
  })
}
