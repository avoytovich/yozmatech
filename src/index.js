import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './helper/history';
import configureStore from './redux/configureStore';
import Layout from './../src/components/Layout';
import Test from './../src/components/Test';
import checkAuth from './../src/helper/redirections';

const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/home" component={Layout} />
        <Route path="/test" component={Test} onEnter={checkAuth} />
        <Redirect from="/" to="/home" />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
