import React from 'react';
import {
  Grid,
  Link,
  Typography
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';

import './header.css';

function Head(props) {

  const links = [
    {
      title: 'Log Out',
      route: '/login'
    }
  ];

  const handleLogOut = () => localStorage.setItem('login', JSON.stringify(null));

  return (
    <div className="wrapper-header">
      <Grid container spacing={0} justify="center">
        <Grid item xs={10} sm={10} />
        <Grid item xs={2} sm={2}>
          <div className="container-link">
            {links.map((link, id) => {
              const {title, route} = link;
              return (
                <Link
                  key={id}
                  href={route}
                  className="link"
                  onClick={handleLogOut}
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

export default withRouter(Head);