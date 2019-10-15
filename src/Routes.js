import React from 'react';
import {Route, Switch} from 'react-router';
import App from './containers/App';
import CurrencyExchangePage from './containers/CurrencyExchangePage/CurrencyExchangePage';
import CurrencyListPage from './containers/CurrencyListPage/CurrencyListPage';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={CurrencyExchangePage} exact />
      <Route  path="/list/" component={CurrencyListPage} exact />
    </Switch>
  </App>
);
