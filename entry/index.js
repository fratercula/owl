/* eslint import/no-unresolved: 0 */
import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

import User from './demos/user'
import Table from './demos/table'
import Info from './demos/info'

const { Content, Sider } = Layout
const { SubMenu } = Menu

const ROUTES = [
  {
    key: 's0',
    icon: 'layout',
    menu: 'Cell',
    routes: [
      {
        label: 'User Card',
        path: '/',
        component: User,
      },
      {
        label: 'Table Card',
        path: '/table',
        component: Table,
      },
    ],
  },
  {
    key: 's1',
    icon: 'credit-card',
    menu: 'Card',
    routes: [
      {
        label: 'Info Card',
        path: '/info',
        component: Info,
      },
    ],
  },
  {
    key: 's2',
    icon: 'folder',
    menu: 'Mix',
    routes: [
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
          defaultOpenKeys={['s0', 's1', 's2']}
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
