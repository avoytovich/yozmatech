import React, { useContext, useReducer } from 'react';
import { Grid } from '@material-ui/core';
import FacebookLogin from 'react-facebook-login';
import { withRouter } from 'react-router-dom';
import { get, omit } from 'lodash';

import Context from '../../helper/context';
import { wrapRequest } from "../../utils/api";

import './login.css';

const Login = props => {
  console.log('props Login', props);
  const { dispatch, store } = useContext(Context);
  console.log('store Login', store);
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

  const responseFacebook = async response => {
    /*console.log('response', response);
    const tokenBlob = new Blob(
      [
        JSON.stringify(
          {
            access_token: response.accessToken,
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const registerUser = await wrapRequest({
      method: "POST",
      url: `http://localhost:3000/auth/facebook`,
      mode: "cors",
      cache: "default",
      data: tokenBlob,
    });
    const { data } = registerUser;
    dispatch({
      type: "AUTH",
      payload: data,
    });
    console.log('store Login', store);
    localStorage.setItem("token", data.token);
    localStorage.setItem(
      "user",
      JSON.stringify(omit(data, ["token", "_id", "email"])),
    );*/


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

export default withRouter(Login);