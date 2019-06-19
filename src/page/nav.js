import React from 'react';
import '../assets/nav.css'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const menuNav = [
    {
        title: '首页',
        index: '1',
        icon: 'home',
        childrenMenu: [
            {title: '首页',index: '1-1',path: 'home'}
        ]
    },
    {
        title: '用户管理',
        index: '2',
        icon: 'skin',
        childrenMenu: [
            {title: '用户列表',index: '2-1',path: 'userlist'},
            {title: '用户导出',index: '2-2',path: 'userexport'},
            {title: '黑名单',index: '2-3',path: 'blackname'},
        ]
    }
]

class Nav extends React.Component{
    state = {
        collapsed: false,
        menuNav: menuNav,
        openKeys: ['1'],
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    // 返回一级菜单的唯一标识
    rootSubmenuKeys = () => {
        const rootSubmenuKeys = [];
        menuNav.forEach(ele => {
            rootSubmenuKeys.push(ele.index)
        });
        return rootSubmenuKeys
    };

    // 打开的菜单数组
    OpenChange = openKeys => {
        console.log(openKeys)
        const rootSubmenuKeys = this.rootSubmenuKeys()
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    // 被选中是调用-路径
    handleSelect = ({key}) => {
        console.log(key)
    };
    
    render(){
        let {routes,match} = this.props
        return (
            <Router>
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{
                    overflow: 'auto',
                    height: '100vh',
                }} onCollapse={this.Collapse} onBreakpoint={this.Breakpoint}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultOpenKeys={['1']} defaultSelectedKeys={['userlist']}
                    onOpenChange={this.OpenChange}
                    openKeys={this.state.openKeys}
                    onSelect={this.handleSelect}>
                        {
                            this.state.menuNav.map((item, i) => (
                                <SubMenu key={item.index}
                                    title={
                                        <span>
                                            <Icon type={item.icon} />
                                            <span>{item.title}</span>
                                        </span>
                                    }>
                                    {
                                        item.childrenMenu.map((j) => (
                                            <Menu.Item key={j.path}>
                                                <Link to={`${match.url}/${j.path}`}>{j.title}</Link>
                                            </Menu.Item>
                                        ))
                                    }
                                </SubMenu>
                            ))
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}/>
                    </Header>
                    <Content style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280}}>
                            {
                                routes.map((route, key) => {
                                    return <Route 
                                        key={key}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.component}
                                    />
                                })
                            }
                    </Content>
                </Layout>
            </Layout>
            </Router>
        )
    }
}

export default Nav