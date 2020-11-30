
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

class Navbar extends Component {
    state = {}
    render() {
        return (
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"> <Link to="/">Post</Link></Menu.Item>
                    <Menu.Item key="2"> <Link to="/signin">Sign in</Link></Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default Navbar;