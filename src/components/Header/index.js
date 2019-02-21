import React, { Component } from 'react';
import {
  Grid,
  Link,
  Typography
} from '@material-ui/core';

import './header.css';

function Header() {
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
  return (
    <div className="wrapper">
      <Grid container spacing={0} justify="center">
        <Grid item xs={10} sm={10}>
        </Grid>
        <Grid item xs={2} sm={2}>
          <div className="container-link">
            {links.map(link => {
              const {title, route} = link;
              return (
                <Link
                  href={route}
                  className="link"
                  style={{ color: '#ffffff' }}
                >
                  <Typography className='link-title'>
                    {title}
                  </Typography>
                </Link>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;