import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { get } from 'lodash';

import connect from './../../utils/connectFunction';
import action from './../../utils/actions';

import './favorities.sass';

function Favorities(props) {
  console.log('Favorities props', props);

  const favorities = get(props, 'store.favorities');
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      render: text => text,
    },
    {
      title: 'name',
      dataIndex: 'name',
      render: text => text,
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      render: text => text,
    },
    {
      title: 'email',
      dataIndex: 'email',
      render: text => text,
    },
  ];
  const data =
    favorities && favorities.map((each, id) => ({ ...each, key: each.id }));

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      const presSelectedContacts = selectedRows.filter(
        each => each !== undefined
      );
      setSelectedContacts(presSelectedContacts);
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   'selectedRows: ',
      //   selectedRows
      // );
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  return (
    <div className="wrapper-favorities">
      <Grid container spacing={0} justify="center">
        <Grid item xs={12} sm={12}>
          <div className="container-favorities">
            <Grid container spacing={8} justify="center">
              <Grid item xs={12} sm={12}>
                <div className="favorities-page">
                  <div className="favorities-list">
                    <Typography variant="h4" className="caption">
                      List of Favorities
                    </Typography>
                    {data && (
                      <Table
                        rowSelection={{
                          type: 'checkbox',
                          ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                        pagination={{ pageSize: 5 }}
                      />
                    )}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return { store: state };
};

const mapDispatchToProps = dispatch => {
  const actionData = (name, payload) => dispatch(action(name, payload));
  return {
    // dispatchFavorities: actionData,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Favorities));
