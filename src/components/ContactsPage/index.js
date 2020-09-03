import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { get } from 'lodash';

import Popover from './../shared/Popover';
import Add_Contact from './../shared/Popover/Add_Contact';
import Edit_Contact from './../shared/Popover/Edit_Contact';
import connect from './../../utils/connectFunction';
import action from './../../utils/actions';

import './contacts.sass';

function ContactsPage(props) {
  // console.log('ContactsPage props', props);

  const [selectedContacts, setSelectedContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [close, setClose] = useState(true);
  const [execFetch, setExecFetch] = useState(false);

  useEffect(() => {
    const fetchContacts = async () =>
      props.dispatchFetchContacts(
        'fetchContacts',
        props.store.contacts ||
          get(JSON.parse(localStorage.getItem('state')), 'contacts')
      );
    fetchContacts();
  }, [execFetch]);

  const contacts = get(props, 'store.contacts');
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
    contacts && contacts.map((each, id) => ({ ...each, key: each.id }));

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

  const handleSave = () => {
    props.dispatchSaveContact('saveNewContact', {
      id:
        (props.store.contacts[props.store.contacts.length - 1] &&
          props.store.contacts[props.store.contacts.length - 1].id + 1) ||
        0,
      ...newContact,
    });
    setClose(false);
  };

  const handleDelete = () => {
    props.dispatchDeleteContacts('deleteContacts', selectedContacts);
    setExecFetch(!execFetch);
    setSelectedContacts([]);
  };

  const handleEdit = () => {
    props.dispatchEditContact(
      'editContact',
      Object.assign({}, { id: selectedContacts[0].id, ...newContact })
    );
    setClose(false);
  };

  const handleFavorities = () => {
    props.dispatchFavorities('addFavorities', selectedContacts);
  };

  const handleChangeName = value =>
    setNewContact({ ...newContact, name: value });
  const handleChangePhone = value =>
    setNewContact({ ...newContact, phone: value });
  const handleChangeEmail = value =>
    setNewContact({ ...newContact, email: value });

  return (
    <div className="wrapper-contacts">
      <Grid container spacing={0} justify="center">
        <Grid item xs={12} sm={12}>
          <div className="container-contacts">
            <Grid container spacing={8} justify="center">
              <Grid item xs={12} sm={12}>
                <div className="contacts-page">
                  <div className="contacts-list">
                    <Typography variant="h4" className="caption">
                      List of Contact's
                    </Typography>
                    <Typography variant="h5" className="caption">
                      <Link to={'/favorities'}>
                        <RightOutlined />
                        GO TO Favorities
                      </Link>
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
                  <div className="contacts-nav">
                    <Popover title="Add" color="green">
                      {handleClose => (
                        <Add_Contact
                          handleChangeName={handleChangeName}
                          handleChangePhone={handleChangePhone}
                          handleChangeEmail={handleChangeEmail}
                          handleSave={handleSave}
                          close={close}
                          setClose={setClose}
                          handleClose={handleClose}
                        />
                      )}
                    </Popover>
                    {selectedContacts.length == 1 ? (
                      <Button
                        type="primary"
                        style={{
                          border: 'red',
                          backgroundColor: 'red',
                        }}
                        onClick={handleDelete}
                      >
                        Delete
                      </Button>
                    ) : null}
                    {selectedContacts.length == 1 ? (
                      <Popover title="Edit" color="orange">
                        {handleClose => (
                          <Edit_Contact
                            selectedContacts={selectedContacts}
                            handleChangeName={handleChangeName}
                            handleChangePhone={handleChangePhone}
                            handleChangeEmail={handleChangeEmail}
                            handleEdit={handleEdit}
                            close={close}
                            setClose={setClose}
                            handleClose={handleClose}
                          />
                        )}
                      </Popover>
                    ) : null}
                    {selectedContacts.length == 1 ? (
                      <Button
                        type="primary"
                        style={{
                          border: 'blue',
                          backgroundColor: 'blue',
                        }}
                        onClick={handleFavorities}
                      >
                        to Favorites
                      </Button>
                    ) : null}
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
    dispatchFetchContacts: actionData,
    dispatchSaveContact: actionData,
    dispatchDeleteContacts: actionData,
    dispatchEditContact: actionData,
    dispatchFavorities: actionData,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactsPage));
