import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Button, Input, List, Anchor } from 'antd';

import { text, menuCategories } from './../../helper/constants';

import './internalLayout.css';

const {
  Header, Content, Footer, Sider,
} = Layout;
const { Link } = Anchor;

const {add, remove, header, footer} = text;

const InternalLayout = props => {
  const [menu, setMenu] = useState(JSON.parse(localStorage.getItem('menu')));
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
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
    <div>{`${menu && menu[selectedMenuItem] && menu[selectedMenuItem].title} CONTENT`}</div>
  );

  const addMenu = () => {
    const changedMenu = [
      ...menu,
      {
        title: `${menuInput}`,
        links: []
      }
    ];
    setMenu(changedMenu);
    return reuseWithLocalStorage([...changedMenu]);
  };

  const removeMenu = () => {
    const changedMenu = menu.filter((el, id) => el.title != menuInput);
    setMenu(changedMenu);
    return reuseWithLocalStorage([...changedMenu]);
  };

  const addLink = () => {
    const changedMenu = [
      ...menu,
    ];
    const posPush = linkInput.indexOf(' ');
    if (posPush === -1) {
      changedMenu[selectedMenuItem].links.push(linkInput);
    } else {
      const posStart = linkInput.slice(posPush);
      const link = linkInput.slice(0, posPush);
      changedMenu[selectedMenuItem].links.splice(posStart, 0, link);
    }
    setMenu(changedMenu);
    return reuseWithLocalStorage([...changedMenu]);
  };

  const removeLink = () => {
    const changedMenu = [...menu];
    changedMenu[selectedMenuItem].links = changedMenu[selectedMenuItem].links.filter(el => el != linkInput);
    setMenu(changedMenu);
    return reuseWithLocalStorage([...changedMenu]);
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

  useEffect(() => {
    !localStorage.getItem('menu') && localStorage.setItem('menu', JSON.stringify(menuCategories));
    !menu && setMenu(JSON.parse(localStorage.getItem('menu')));
  }, [menu]);

  console.log('menu', menu);
  return (
    <div className="wrapper-layout">
      <Layout>
        <Sider style={{
          overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
        }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menu && menu.map((el, id) => (
              <Menu.Item key={id} onClick={ e => setSelectedMenuItem(e.key) }>
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
                dataSource={menu && menu[selectedMenuItem] && menu[selectedMenuItem].links || []}
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
  );
};

export default InternalLayout;
