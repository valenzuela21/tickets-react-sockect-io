import React, {useContext} from 'react'
import { Layout, Menu } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {LoginTicket} from "./LoginTicket";
import {LineTicket} from "./LineTicket";
import {CreateTicket} from "./CreateTicket";
import {Desktop} from "./Desktop";
import {UiContext} from "../context/UiContext";
const { Sider, Content } = Layout;


export const RouterPage = () =>{

    const {hideMenu} = useContext(UiContext)

    return(
        <Router>
        <Layout style={{height: '100vh'}} >
            <Sider collapsedWidth = "0"
                    breakpoint = "md"
                    hidden={hideMenu}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />} defaultSelectedKeys={['1']}>
                        <Link to="/">Ingresar</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        <Link to="/line" >Cola</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        <Link to="/create" > Crear Ticket </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path="/create">
                           <CreateTicket/>
                        </Route>
                        <Route path="/line">
                            <LineTicket/>
                        </Route>
                        <Route path="/desktop">
                            <Desktop/>
                        </Route>
                        <Route exact path="/">
                           <LoginTicket/>
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
        </Router>
    )
}
