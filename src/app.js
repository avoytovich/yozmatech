import React, { useEffect, useReducer } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { get } from 'lodash';

import history from './helper/history';
import Context from './helper/context';
import generalReducer from './utils/generalReducer';
import { Home, Login, Test } from './components';
import checkAuth from './helper/redirections';
import { menuCategories } from './helper/constants';

const App = props => {

  const [store, dispatch] = useReducer(generalReducer, JSON.parse(localStorage.getItem('store')));
  const content = get(store, 'content');
  const selectedMenuItem = get(store, 'selectedMenuItem');

  useEffect(() => {
    (!JSON.parse(localStorage.getItem('store')) &&
      localStorage.setItem('store', JSON.stringify({
        content: menuCategories,
        selectedMenuItem: 1,
      }))
    ) ||
    !store && dispatch({ type: 'GET_LOCALSTORAGE' })
  }, []);

  useEffect(() => {
    content && localStorage.setItem('store', JSON.stringify({
      content,
      selectedMenuItem,
    }))
  }, [content, selectedMenuItem]);

  console.log('store', store);
  return(
    <Context.Provider value={{dispatch, store}}>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" render={() => (
            checkAuth() ? (
              <Redirect to="/login"/>
            ) : (
              <Home />
            )
          )}/>
          <Route path="/test" render={() => (
            checkAuth() ? (
              <Redirect to="/login"/>
            ) : (
              <Test />
            )
          )}/>
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
