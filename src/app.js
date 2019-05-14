import React, { useState, useEffect, useReducer, createContext } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from './helper/history';
import { Home, Login, Test } from './components';
import checkAuth from './helper/redirections';
import { menuCategories } from './helper/constants';

function App(props) {
  const TodoContext = createContext(null);

  const [selectedMenu, setSelectedMenu] = useState(1);

  const generalReducer = (state, action) => {
    switch (action.type) {
    case 'ADD_TITLE':
      return [
        ...state,
        {
          title: action.payload,
          links: [],
        },
      ];
    case 'REMOVE_TITLE':
      return state.filter(el => el.title != action.payload);
    case 'ADD_LINK':
      setSelectedMenu(action.selectedMenu);
      const changedState = [...state];
      changedState[action.selectedMenu] = {
        title: state[action.selectedMenu].title,
        links: [...state[action.selectedMenu].links, action.payload]
      };
      return changedState;
    case 'REMOVE_LINK':
      setSelectedMenu(action.selectedMenu);
      const changed = [...state];
      changed[action.selectedMenu] = {
        title: state[action.selectedMenu].title,
        links: [...state[action.selectedMenu].links.filter(el => el != action.payload)]
      };
      return changed;
    case 'GET_LOCALSTORAGE':
      return JSON.parse(localStorage.getItem('menu'));
    default:
      return state;
    }
  };

  const [store, dispatch] = useReducer(generalReducer, JSON.parse(localStorage.getItem('menu')));

  useEffect(() => {
    (!JSON.parse(localStorage.getItem('menu')) &&
      localStorage.setItem('menu', JSON.stringify(menuCategories))) ||
    store && store.length && localStorage.setItem('menu', JSON.stringify(store)) ||
    !store && dispatch({ type: 'GET_LOCALSTORAGE' })
  }, [store]);

  console.log('store', store);
  return(
    <TodoContext.Provider value={store}>
      <Router history={history}>
        <Switch>
          <Route path="/login" render={() => <Login store={store}/>} />
          <Route path="/home" render={() => (
            checkAuth() ? (
              <Redirect to="/login"/>
            ) : (
              <Home
                store={store}
                dispatch={dispatch}
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
              />
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
    </TodoContext.Provider>
  );
}

export default App;
