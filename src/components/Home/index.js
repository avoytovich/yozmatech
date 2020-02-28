import React, { useEffect, useState, useContext } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Button, Input, List, Anchor } from 'antd';
import { get } from 'lodash';

import Head from './../Header';
import { text } from 'Helper/constants';
import Context from './../../helper/context';
import connect from './../../utils/connectFunction';
import action from './../../utils/actions';

import './layout.css';

const {
  Header, Content, Footer, Sider,
} = Layout;
const { Link } = Anchor;

const {add, remove, header, footer} = text;

const Home = props => {
  console.log('Home props', props);
  // const { dispatch, store } = useContext(Context);
  const { content } = get(props, 'store');
  const [menuInput, setMenuInput] = useState('');
  const [linkInput, setLinkInput] = useState('');
  const [selectedMenuItem, setSelectedMenuItem] = useState(props.store.selectedMenuItem);

  const getContent = (data, id) => (
    <List.Item>
      <span className="list-link-order">{id}</span>
      <Anchor>
        <Link href={data} title={data} />
      </Anchor>
    </List.Item>
  );

  const getListHeader = () => (
    <div>{`${content[props.store.selectedMenuItem].title} CONTENT`}</div>
  );

  const changedMenuItem = e => {
    setSelectedMenuItem(e.key);
    props.dispatchChangedSelectedMenuItem('changedSelectedMenuItem', e.key);
  };

  const addMenu = e => {
    e.stopPropagation();
    setSelectedMenuItem(content.length);
    dispatch({
      type: 'CHANGE_SELECTED_MENU_ITEM',
      payload: content.length,
    });
    dispatch({
      type: 'ADD_TITLE',
      payload: menuInput,
    });
  };

  const removeMenu = e => {
    e.stopPropagation();
    if (!selectedMenuItem) {
      setSelectedMenuItem(0);
    } else if (selectedMenuItem == content.length - 1) {
      setSelectedMenuItem(selectedMenuItem - 1);
    }
    props.dispatchRemoveTitle('removeTitle', selectedMenuItem);
  };

  const actionLink = (e, data) => {
    e.stopPropagation();
    dispatch({
      type: data,
      selectedMenuItem,
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
          onClick={(e) => actionLink(e, 'ADD_LINK')}
        >
          {add}
        </Button>
        <Button
          type="danger"
          onClick={(e) => actionLink(e, 'REMOVE_LINK')}
        >
          {remove}
        </Button>
      </div>
    </div>
  );

  console.log('props Home', props);
  return (
    <>
      <Head/>
      <div className="wrapper-layout">
        <Layout>
          <Sider style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
          }}
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[`1`]}
              selectedKeys={[`${selectedMenuItem}`]}
            >
              {content.map((el, id) => (
                <Menu.Item key={id} onClick={(e) => changedMenuItem(e)}>
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
                onClick={(e) => addMenu(e)}
              >
                {add}
              </Button>
              <Button
                type="danger"
                onClick={(e) => removeMenu(e)}
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
                  dataSource={content[props.store.selectedMenuItem].links || []}
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
