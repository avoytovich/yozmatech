import React, { Component } from 'react';
import {
  Grid,
  Link,
  Typography
} from '@material-ui/core';
import FacebookLogin from 'react-facebook-login';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';

import checkAuth from '../../helper/redirections';
import history from '../../helper/history';

import './login.css';
import { menuCategories } from '../../helper/constants';

function Header(props) {

  const links = [
    {
      title: 'Log in',
      route: '/login'
    },
    {
      title: 'Sign up',
      route: '/signup'
    }
  ];

  const responseFacebook = (response) => {
    const accessToken = get(response, 'accessToken');
    if (accessToken) {
      localStorage.setItem('login', JSON.stringify(response));
      props.history.push('/home');
    } else {
      console.log('Something went wrong...with login through facebook');
    }
  };

  return (
    <div className="wrapper-login">
      <Grid container spacing={0} justify="center">
        <Grid item xs={12} sm={12}>
          <div className="container-button">
            <FacebookLogin
              size="metro"
              cssClass="kep-login-facebook"
              appId="571013073413679"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Header);