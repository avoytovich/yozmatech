import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { } from 'antd';
import { get } from 'lodash';

import Head from './../Header';
import connect from './../../utils/connectFunction';
import action from './../../utils/actions';

import './layout.css';

const Home = props => {
  console.log('Home props', props);

  return (
    <>
      <Head/>
      <div className="wrapper-layout">
        Hallo
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {store: state}
};

const mapDispatchToProps = dispatch => {
  const actionData = (name, payload) => dispatch(action(name, payload))
  return {
    dispatchRemoveTitle: actionData,
    dispatchChangedSelectedMenuItem: actionData
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
