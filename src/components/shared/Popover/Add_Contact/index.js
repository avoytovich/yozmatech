import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';

import './add_contact.sass';

function Add_Contact(props) {
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
    props.handleSave();
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

  return (
    <div className="wrapper-add-contact-popover">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
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

export default Add_Contact;
