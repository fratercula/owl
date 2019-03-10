/* eslint import/no-unresolved: 0 */
import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

import User from './demos/user'
import Table from './demos/table'
import Info from './demos/info'

import Card from './demos/card'

const { Content, Sider } = Layout
const { SubMenu } = Menu

const ROUTES = [
  {
    key: 's2',
    icon: 'folder',
    menu: 'Default',
    routes: [
      {
        label: 'Card',
        path: '/',
        component: Card,
      },
    ],
  },
  {
    key: 's0',
    icon: 'layout',
    menu: 'Example',
    routes: [
      {
        label: 'User Card',
        path: '/user',
        component: User,
      },
      {
        label: 'Table Card',
        path: '/table',
        component: Table,
      },
      {
        label: 'Info Card',
        path: '/info',
        component: Info,
      },
    ],
  },
]

render((
  <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={240} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[window.location.hash.split('#')[1]]}
          defaultOpenKeys={['s0', 's2']}
          style={{ height: '100%' }}
        >
          {
            ROUTES.map(route => (
              <SubMenu
                key={route.key}
                title={(<span><Icon type={route.icon} />{route.menu}</span>)}
              >
                {
                  route.routes.map(({ label, path }) => (
                    <Menu.Item key={path}>
                      <Link to={path}>
                        {label}
                      </Link>
                    </Menu.Item>
                  ))
                }
              </SubMenu>
            ))
          }
        </Menu>
      </Sider>
      <Layout style={{ padding: 20 }}>
        <Content style={{ height: '100%' }}>
          <div style={{ background: '#fff', padding: 30, minHeight: '100%' }}>
            {
              ROUTES
                .map(({ routes }) => routes)
                .reduce((a, c) => a.concat(c), [])
                .map(({ path, component }) => (
                  <Route key={path} exact path={path} component={component} />
                ))
            }
          </div>
        </Content>
      </Layout>
    </Layout>
  </Router>
), document.getElementById('root'))
