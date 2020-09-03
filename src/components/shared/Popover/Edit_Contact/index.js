import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { get } from 'lodash';

import './edit_contact.sass';

function Edit_Contact(props) {
  // console.log('Edit_Contact props', props);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = values => {
    console.log('Success:', values);
    props.handleEdit();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (!props.close) {
      props.handleClose();
      props.setClose(!props.close);
    }
  }, [props.close]);

  const resolveInitialValue = field => {
    const contacts = get(JSON.parse(localStorage.getItem('state')), 'contacts');
    const resolve = contacts.filter(
      each => each.id == props.selectedContacts[0].id
    );
    return resolve[0][field];
  };

  return (
    <div className="wrapper-edit-contact-popover">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          name: resolveInitialValue('name'),
          phone: resolveInitialValue('phone'),
          email: resolveInitialValue('email'),
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input name!',
            },
          ]}
          onChange={e => props.handleChangeName(e.target.value)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="phone"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input phone!',
            },
          ]}
          onChange={e => props.handleChangePhone(e.target.value)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input email!',
            },
          ]}
          onChange={e => props.handleChangeEmail(e.target.value)}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              margin: '10px',
              border: 'green',
              backgroundColor: 'green',
            }}
          >
            Add
          </Button>
          <Button
            type="primary"
            style={{
              margin: '10px',
              border: 'red',
              backgroundColor: 'red',
            }}
            onClick={props.handleClose}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Edit_Contact;
