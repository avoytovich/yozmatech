import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";

import history from './../helper/history';
import layout from './../components/Layout/layoutReducer';

export default combineReducers({
  router: connectRouter(history),
  layout
});
