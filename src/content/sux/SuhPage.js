import React from "react";
import { Link } from "react-router-dom";
import ReactJsonSchema from "react-json-schema";

import { schemaHeader, schemaContent, schemaFooter } from "./suhJsonData";

import {
  Layout,
  Menu,
  Carousel,
  Row,
  Col,
  Card,
  Image,
  Button,
  Avatar,
  Divider,
  List,
  Input,
  Typography,
  Statistic,
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;
const { Search } = Input;
const view = new ReactJsonSchema();
view.setComponentMap({
  Link,
  Layout,
  Header,
  Footer,
  Sider,
  Content,
  Menu,
  MenuItem,
  SubMenu,
  Carousel,
  Row,
  Col,
  Card,
  Image,
  Button,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemMeta,
  Input,
  Search,
  Title,
  Paragraph,
  Statistic,
});

const SuhPage = () => {
  return (
    <Layout className="gx-app-layouts">
      <Header style={{ height: "48px" }}>
        {view.parseSchema(schemaHeader)}
      </Header>
      <Layout className="ant-layout-content gx-layout-content gx-container-wrap">
        <Content className=" gx-main-content-wrapper">
          {view.parseSchema(schemaContent)}
        </Content>
      </Layout>

      <Footer>{view.parseSchema(schemaFooter)}</Footer>
    </Layout>
  );
};

export default SuhPage;
