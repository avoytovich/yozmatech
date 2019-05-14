import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Button, Input, List, Anchor } from 'antd';

import Head from './../Header';
import { text, menuCategories } from './../../helper/constants';

import './layout.css';

const {
  Header, Content, Footer, Sider,
} = Layout;
const { Link } = Anchor;

const {add, remove, header, footer} = text;

const Home = props => {
  const { store, selectedMenu, setSelectedMenu } = props;
  const [menu, setMenu] = useState(JSON.parse(localStorage.getItem('menu')));
  const [menuInput, setMenuInput] = useState('');
  const [linkInput, setLinkInput] = useState('');

  const reuseWithLocalStorage = data => {
    localStorage.removeItem('menu');
    localStorage.setItem('menu', JSON.stringify(data));
    setMenu(JSON.parse(localStorage.getItem('menu')));
  };

  const getContent = (data, id) => (
    <List.Item>
      <span className="list-link-order">{id}</span>
      <Anchor>
        <Link href={data} title={data} />
      </Anchor>
    </List.Item>
  );

  const getListHeader = () => (
    <div>{`${store && store[selectedMenu] && store[selectedMenu].title} CONTENT`}</div>
  );

  const addMenu = () => {
    props.dispatch({
      type: 'ADD_TITLE',
      payload: menuInput,
    });
  };

  const removeMenu = () => {
    props.dispatch({
      type: 'REMOVE_TITLE',
      payload: menuInput,
    });
  };

  const addLink = () => {
    props.dispatch({
      type: 'ADD_LINK',
      selectedMenu,
      payload: linkInput,
    });
  };

  const removeLink = () => {
    props.dispatch({
      type: 'REMOVE_LINK',
      selectedMenu,
      payload: linkInput,
    });
  };

  const getListFooter = () => (
    <div>
      <div className="container-input">
        <Input
          value={linkInput}
          onChange={e => setLinkInput(e.target.value)}
        />
      </div>
      <div className="container-button">
        <Button
          type="primary"
          onClick={() => addLink()}
        >
          {add}
        </Button>
        <Button
          type="danger"
          onClick={() => removeLink()}
        >
          {remove}
        </Button>
      </div>
    </div>
  );

  /*console.log('props Home', props);
  console.log('state(menu) Home', menu);*/
  return (
    <>
      <Head/>
      <div className="wrapper-layout">
        <Layout>
          <Sider style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
          }}
          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[`${selectedMenu}`]}>
              {store && store.map((el, id) => (
                <Menu.Item key={id} onClick={ e => setSelectedMenu(e.key) }>
                  <Icon type="menu-unfold"/>
                  <span className="nav-text">{el.title}</span>
                </Menu.Item>
              )) || null }
            </Menu>
            <div className="container-input">
              <Input
                value={menuInput}
                onChange={e => setMenuInput(e.target.value)}
              />
            </div>
            <div className="container-button">
              <Button
                type="primary"
                onClick={() => addMenu()}
              >
                {add}
              </Button>
              <Button
                type="danger"
                onClick={() => removeMenu()}
              >
                {remove}
              </Button>
            </div>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>
              {header}
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                <List
                  size="small"
                  header={getListHeader()}
                  footer={getListFooter()}
                  bordered
                  dataSource={store && store[selectedMenu] && store[selectedMenu].links || []}
                  renderItem={(item, id) => getContent(item, id)}
                />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              {footer}
            </Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default Home;
