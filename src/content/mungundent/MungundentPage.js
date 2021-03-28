import React from "react";
import CustomScrollbars from "../../util/CustomScrollbars";

import { Link } from "react-router-dom";

import {
  schemaHeader,
  schemaBody,
  schemaBodyParams,
  schemaContent,
  // xminHome01,
  // xminAbout01,
  // xminPorfolio01,
} from "./mungundentJsonData";

import {
  Button,
  Card,
  Carousel,
  Col,
  Layout,
  Menu,
  Row,
  Image,
  Avatar,
  Divider,
  List,
  Input,
  Typography,
  Breadcrumb,
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;
const { Search } = Input;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;

const MungundentPage = () => {
  return (
    // <Layout className="gx-app-layouts">
    //   <Layout>
    //     <Content>
    //       <div {...schemaBodyParams}>dsfdsfdsfds</div>
    //     </Content>
    //   </Layout>
    // </Layout>

    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MungundentPage;
