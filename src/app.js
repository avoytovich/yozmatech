import React, { useReducer } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import createPersistedReducer from 'use-persisted-reducer';

import history from './helper/history';
import Context from './helper/context';
import generalReducer from './utils/generalReducer';
import { ContactsPage, Favorities } from './components';

const App = props => {
  const usePersistedReducer = createPersistedReducer('state');
  const [store, dispatch] = usePersistedReducer(generalReducer, {
    contacts: [],
    favorities: [],
  });

  //console.log('store', store);
  return (
    <Context.Provider value={{ dispatch, store }}>
      <Router history={history}>
        <Switch>
          <Route path="/favorities" render={() => <Favorities />} />
          <Route path="/contacts" component={ContactsPage} />
          <Redirect from="/" to="/contacts" />
        </Switch>
      </Router>
    </Context.Provider>
  );
};

export default App;
